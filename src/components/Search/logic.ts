/* eslint-disable class-methods-use-this */
import {
  Vue, Component, Prop, Ref, Watch,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import { IEvent } from '@/types';
import Label from '@/components/Label/index.vue';
import Button from '@/components/Button/index.vue';

const keyList = ['ArrowUp', 'ArrowDown', 'Enter'];
interface IInput {
  title: string | null;
  value: string;
  disabled?: boolean;
  width?: string;
}
interface ISelectItem {
  title: string;
  text: string;
  isUnique?: boolean;
  value: string;
}

@Component({
  components: {
    Icon,
    Label,
    Button,
  },
})
export default class Search extends Vue {
  /**
   * Props
   */

  @Prop({ type: Array }) readonly options!: ISelectItem[];

  @Prop({ type: Function }) readonly onSearch!: (value: string) => void;

  /**
   * Refs
   */
  @Ref() readonly optionRef!: Element;

  @Ref() readonly menuRef!: HTMLElement;

  @Ref() readonly inputRef!: HTMLElement;

  @Ref() readonly tagRef!: HTMLElement;

  /**
   * Data options
   */
  isInputFocused = false;

  showList = false;

  activeOptionIndex = -1;

  filteredOptions: ISelectItem[] = [];

  inputValue = '';

  buttonSearchText = '';

  showMenueList = true;

  activeInput = 0;

  inputWidth = '';

  inputs: IInput[] = [{ title: null, value: '', disabled: false }];

  style = {
    top: '',
    left: '',
    width: '',
  };

  get inputModel(): string {
    return this.inputValue;
  }

  set inputModel(value: string) {
    this.inputValue = value;
  }

  /**
   * Mounted
   */
  mounted(): void {
    document.documentElement.addEventListener(
      'click',
      this.outsideClick,
      false,
    );
    document.addEventListener('scroll', this.updateStyle);
    window.addEventListener('resize', this.onResize);
    this.filteredOptions = this.options;
  }

  @Watch('showList')
  watchShowList(): void {
    this.$nextTick(() => {
      if (this.showList) {
        this.updateStyle();
      }
    });
    if (this.showList) {
      // append menu to body
      document.body.appendChild(this.menuRef);
    }
  }

  /**
   * Methods
   */
  updateStyle(): void {
    // get the position of button and set it to menu

    if (this.inputRef) {
      const {
        height, top, left, width,
      } = this.inputRef?.children[0]?.getBoundingClientRect();
      const menuWidth = this.menuRef?.children[0]?.getBoundingClientRect().width;

      this.$set(this.style, 'top', `${top + height + 2}px`);
      this.$set(this.style, 'width', `${width}px`);

      // if left space is smaller than menu width so open menue on right
      if (menuWidth > left) {
        this.$set(this.style, 'left', `${left}px`);
      } else {
        this.$set(this.style, 'left', `${left - menuWidth + width}px`);
      }
    }
  }

  onFocusIn(event: KeyboardEvent): void {
    // for adding active label style

    // open dropdown
    this.showMenueList = true;
    this.showOptions();
    // this.filteredOptions = this.options;
  }

  activeInputHandler() {
    const isInputActive = document
      .querySelector('.zpl-search')
      ?.classList.contains('focused');
    if (isInputActive) {
      this.isInputFocused = true;
    } else {
      this.isInputFocused = false;
    }
  }

  selectOption(option, index): void {
    // this.inputVal = text;
    this.$emit('input', option.value);
    this.hideOptions();
    // this.activeInputHandler();
    // this.isInputFocused = true;
    if (option.title) {
      this.$nextTick(() => {
        this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[this.inputs.length - 2]?.focus();
      });
      // this.focusNextInput(index);
    }
    const inputsLatestObjectIndex = this.inputs.length - 1;
    if (!this.inputs[inputsLatestObjectIndex].value) {
      this.inputs[inputsLatestObjectIndex] = {
        title: option.title,
        value: '',
      };
    } else {
      const empty = this.inputs.indexOf(
        this.inputs.filter((i) => !i.title && !i.value.trim())[0],
      );
      if (empty) {
        this.inputs.splice(empty, 1);
      }

      this.inputs.push({
        title: option.title,
        value: '',
      });
    }
    // this.inputs.push({
    //   title: option.title,
    //   value: '',
    // });
    this.inputs.push({
      title: null,
      value: '',
      disabled: true,
    });

    if (option.isUnique) {
      // this.filteredOptions.splice(index, 1);
    }
  }

  removeInput(input, index: number, event) {
    const { value } = event.target as HTMLInputElement;
    if (index === 0) {
      this.onFocusIn(event);
      this.buttonSearchText = '';
      if (input.title && !value) {
        this.inputs.splice(index, 1);
        if (!this.inputs.length) {
          this.inputs.push({
            title: null,
            value: '',
            disabled: false,
          });
        } else {
          this.inputs[index].disabled = false;
        }
        this.filteredOptions = this.options;
      }
    } else if (!value && (index > 0 || input.title)) {
      this.inputs.splice(index, 1);
      this.activeInput = index - 1;
      this.$nextTick(() => {
        this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index - 1]?.focus();
      });
    }
    if (value) {
      this.filteredOptions = this.options.filter((option) => option?.title?.toLowerCase().includes(value.trim().toLowerCase()));
    }
  }

  focusNextInput(index: number) {
    this.$nextTick(() => {
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index + 1]?.focus();
    });
  }

  activeNextInput(value: string, index: number, event) {
    // this.showMenueList = true;
    // this.showOptions();
    this.activeInput = index;
    if (this.inputs[index].title) {
      if (value) {
        this.inputs[index + 1].disabled = false;
        this.focusNextInput(index);
      }
    } else if (value.trim()) {
      if (index === this.inputs.length - 1) {
        // this.inputs.push({
        //   title: null,
        //   value: '',
        //   disabled: false,
        // });
        // this.focusNextInput(index);
        // this.hideOptions()
        this.showMenueList = false;
      } else {
        this.inputs[index + 1].disabled = false;
        // this.showOptions();
        this.focusNextInput(index);
        console.log('activa');
      }
    }
    this.filteredOptions = this.options.filter(
      (objFromA) => !this.inputs.find(
        (objFromB) => objFromA.title === objFromB.title && objFromA.isUnique,
      ),
    );
    console.log(this.filteredOptions, 'this.filteredOptions');
  }

  inputsHandler(input, event: Event) {
    // (event?.target as HTMLTextAreaElement)?.setAttribute('size', input.value.length);
    if (input.value.trim()) {
      const list: string[] = [];
      if (input.title) {
        // this.showMenueList = false;
      }
      this.inputs.forEach((item) => {
        if (item.value) {
          list.push(`${item.title ?? ''} ${item.value}`);
        } else {
          // this.isTagValue = true;
        }
      });
      this.buttonSearchText = `"${list.join(' ')}"`;
    }
  }

  showOptions(): void {
    this.showList = true;
  }

  hideOptions(): void {
    this.$nextTick(() => {
      this.showList = false;
    });
  }

  // TODO: change any
  outsideClick(event: Event): void {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      this.hideOptions();
      this.activeInputHandler();
    }
  }

  searchFocusIn() {
    this.activeInputHandler();
  }

  searchFocusOut() {
    // this.isInputFocused = false;
    // console.log('searchFocusOut')
  }

  onKeyUp(event: KeyboardEvent): void {
    // if any key code in the list is pressed do nothing
    if (keyList.includes(event.key)) {
      console.log('ket');
    }
    // otherwise filter the list based on value that user is typing
    // this.filteredOptions = this.options.filter((option: ISelectOptions) => option.title.toLowerCase().includes(this.inputVal.toLowerCase()));
  }

  filterInputs(input, index: number, event: KeyboardEvent) {
    // this.filteredOptions = this.options;
    console.log('changer', input.value);
    this.inputs[index].width = `${input.value.length}ch`;
    this.tagRef[index].style.width = `${input.value.length}ch`;
    // this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index]?.style.width = `${input.value.length}ch`;
    const regex = /([^ \\:]+ ?){1,2}: ?$/;
    const isMatched = regex.test(input.value);
    const myRegexp = new RegExp(regex);
    const match = myRegexp.exec(input.value);
    this.inputs[index].width = `${0}ch`;
    if (match) {
      // console.log('ms', index);
      // event.target = ''
      // console.log(this.filteredOptions.filter((option) => option?.title?.toLowerCase() === input.value));
      const availableLabel = this.options.filter((option) => option?.title?.toLowerCase() === match[0]);
      if (availableLabel.length) {
        // console.log('is,amma', index, this.inputs);
        // input.value = '';
        this.inputs[index].value = input.value.replace(match[0], '');
        // this.tagRef[index + 1].focus();
        this.$nextTick(() => {
          this.tagRef[index].style.width = `${input.value.length}ch`;
          this.tagRef[index + 1].focus();
        });
        console.log(this.inputs[index].value, 'this.inputs[index].value');
        // this.inputs[index].title = availableLabel[0].title;
        if (this.inputs[index].value.trim()) {
          this.inputs.push({
            title: availableLabel[0].title,
            value: '',
          });
        } else {
          this.inputs[index].title = availableLabel[0].title;
        }

        this.inputs.push({
          title: null,
          value: '',
          disabled: true,
        });
        this.hideOptions();
        // event.target.value = ''
      }
    } else {
      console.log('no ma');
    }
    const isEnterKey = event.key === 'Enter';
    if (isEnterKey) {
      this.hideOptions();
      this.onSearch(this.buttonSearchText.replace(/['"]+/g, ''));
    }
    if (!input.title) {
      // this.filteredOptions = this.filteredOptions.length
      //   ? this.filteredOptions.filter((option) => option?.title?.toLowerCase().includes(input.value.trim().toLowerCase()))
      //   : this.options;
      if (index === 0 && !input.value) {
        this.filteredOptions = this.options;
      } else {
        const me = this.options.filter(
          (objFromA) => !this.inputs.find(
            (objFromB) => objFromA.title === objFromB.title && objFromA.isUnique,
          ),
        );

        this.filteredOptions = me.filter((option) => option?.title
          ?.toLowerCase()
          .includes(input.value.trim().toLowerCase()));
      }
    }
    // this.filteredOptions = this.options.filter((option) => option?.title?.toLowerCase().includes(input.value.trim().toLowerCase()));
    // this.inputWidth = `${event?.target.value.length}px`;
    this.inputs[index].width = `${event?.target.value.length}ch`;
  }

  onKeyDown(index: number, e: KeyboardEvent): void {
    const isArrowDownKey = e.key === 'ArrowDown';
    const isArrowUpKey = e.key === 'ArrowUp';
    const isEnterKey = e.key === 'Enter';

    // if dropdown is open
    if (this.showList) {
      // if arrow up or down key is pressed
      if (isArrowDownKey || isArrowUpKey) {
        for (let i = 0; i < this.filteredOptions.length; i += 1) {
          // find the active option based on class
          const item = this.menuRef.querySelectorAll('li')[i];
          const activeOption = item.classList.contains('active');
          // if there is active option then remove the active class and
          // update the index of active option in order to move active class
          if (item.classList.contains('disabled')) {
            // this.activeOptionIndex += i;
          } else if (activeOption) {
            this.activeOptionIndex = i;
            item.classList.remove('active');
          }
        }
      }
      // if arrow down key is pressed
      if (isArrowDownKey) {
        // if there's no active index so the first index is active
        if (this.activeOptionIndex === -1) {
          this.activeOptionIndex = 0;

          // active next option till the end of list
        } else if (this.activeOptionIndex < this.filteredOptions.length - 1) {
          this.activeOptionIndex += 1;

          // if we achieved to the end of list so go to the first option
        } else if (this.activeOptionIndex >= this.filteredOptions.length - 1) {
          this.activeOptionIndex = 0;
        }
        // if arrow up key is pressed
      } else if (isArrowUpKey) {
        // if there's no active index so the first index is active
        if (this.activeOptionIndex === -1) {
          this.activeOptionIndex = 0;

          // if we achieved to the first of list so go to the last option
        } else if (this.activeOptionIndex === 0) {
          this.activeOptionIndex = this.filteredOptions.length - 1;

          // active previous option till the start of list
        } else if (this.activeOptionIndex <= this.filteredOptions.length - 1) {
          this.activeOptionIndex -= 1;
        }

        // if enter key is pressed
      } else if (isEnterKey) {
        // if there's active option and we have filter list
        if (this.activeOptionIndex >= 0 && this.filteredOptions) {
          // // take the name of active option
          // const newValue = this.filteredOptions[this.activeOptionIndex]
          //   ? this.filteredOptions[this.activeOptionIndex].title
          //   : '';

          // // update the value of input
          // // this.$emit('updateData', newValue);
          // this.inputValue = newValue;
          // close the dropdown
          this.selectOption(
            this.filteredOptions[this.activeOptionIndex],
            index,
          );

          this.hideOptions();
          console.log('enter');
          // disable the active option
          this.activeOptionIndex = -1;
        }
      }
      // if dropdown is closed and enter key is pressed
    } else if (isEnterKey) {
      // open the dropdown
      // this.showOptions();
      // // show the compelete list
      // this.filteredOptions = this.options;
    }
  }

  wrapper(index: number) {
    const idx = index === 0 ? 0 : index - 1;
    this.$nextTick(() => {
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[idx]?.focus();
    });
  }

  activateOption(e: IEvent): void {
    // if any option has active class remove it
    [].forEach.call(this.optionRef, (el: HTMLElement) => {
      el.classList.remove('active');
    });
    // add active class when a mouse enters
    e.target.classList.add('active');
  }

  deactivateOption(e: IEvent): void {
    e.target.classList.remove('active');
  }

  onResize(): void {
    this.$nextTick(() => {
      // update position of menue when window is resizing
      if (this.showList) {
        this.updateStyle();
      }
    });
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if (this.menuRef) {
      this.menuRef?.parentNode?.removeChild(this.menuRef);
    }
    this.showList = false;
    window.removeEventListener('keypress', this.onSlashPress);
  }

  created() {
    window.addEventListener('keypress', this.onSlashPress);
  }

  onSlashPress(event: KeyboardEvent) {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      event.preventDefault();
      if (event.key !== '/') {
        return;
      }

      if (document.activeElement === this.inputRef) {
        return;
      }
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[this.inputs.length - 1]?.focus();
      //   if (event.code === 'Slash') {
      //     this.showOptions();

    //     this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[this.inputs.length - 1]?.focus();
    //   }
    }
  }
}
