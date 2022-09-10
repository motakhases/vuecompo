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

  @Prop({ type: String }) readonly value!: string;

  /**
   * Refs
   */
  @Ref() readonly optionRef!: Element;

  @Ref() readonly menuRef!: HTMLElement;

  @Ref() readonly inputRef!: HTMLElement;

  @Ref() readonly tagRef!: HTMLElement;

  @Ref() readonly deleteBtnRef!: HTMLElement;

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
      true,
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

  onFocusIn(input, index): void {
    // open dropdown
    // const input = this.inputs[this.inputs.length - 2];
    // console.log(input, index);
    if (input) {
      this.isInputFocused = true;

      if (input?.title) {
        if (index !== 0) {
          if (this.buttonSearchText) {
            this.showMenueList = false;
            this.showOptions();
          }
          // this.showMenueList = false;
        } else {
          this.hideOptions();
        }
      } else {
        this.showMenueList = true;
        this.showOptions();
      }
    } else {
      this.showMenueList = true;
      this.showOptions();
    }
  }

  selectOption(option, index): void {
    // this.inputVal = text;
    this.showMenueList = false;
    this.$emit('input', option.value);
    this.hideOptions();
    this.isInputFocused = true;
    if (option.title) {
      this.isInputFocused = true;
      this.$nextTick(() => {
        this.tagRef[this.inputs.length - 2]?.focus();
      });
      console.log('fopxus here', option);
      // this.showOptions();
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
    console.log(index);

    if (index === 0) {
      // this.onFocusIn();
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
      console.log(this.buttonSearchText);
    } else if (!value && (index > 0 || input.title)) {
      this.inputs.splice(index, 1);
      this.activeInput = index - 1;
      this.$nextTick(() => {
        this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index - 1]?.focus();
        this.isInputFocused = true;
      });
    }
    if (value) {
      this.filteredOptions = this.options.filter((option) => option?.title?.toLowerCase().includes(value.trim().toLowerCase()));
    }
  }

  focusNextInput(index: number) {
    this.$nextTick(() => {
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index]?.focus(); this.isInputFocused = true;
    });
  }

  activeNextInput(value: string, index: number, event) {
    // this.showMenueList = true;
    // this.showOptions();
    this.activeInput = index;
    if (this.inputs[index].title) {
      if (value) {
        this.inputs[index + 1].disabled = false;
        this.focusNextInput(index + 1);
        event.preventDefault();
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
        this.focusNextInput(index + 1);
        event.preventDefault();
      }
    }
    this.filteredOptions = this.options.filter(
      (objFromA) => !this.inputs.find(
        (objFromB) => objFromA.title === objFromB.title && objFromA.isUnique,
      ),
    );
  }

  updateButtonText() {
    const list: string[] = [];
    this.inputs.forEach((item) => {
      if (item.value) {
        list.push(`${item.title ?? ''} ${item.value}`);
      } else {
      // this.isTagValue = true;
      }
    });
    this.buttonSearchText = `"${list.join(' ')}"`;
  }

  inputsHandler(input, event: Event) {
    // (event?.target as HTMLTextAreaElement)?.setAttribute('size', input.value.length);
    if (input.value.trim()) {
      if (input.title) {
        // this.showMenueList = false;
      }
      this.updateButtonText();
    }
  }

  showOptions(): void {
    this.showList = true;
  }

  hideOptions(): void {
    // this.isInputFocused = false;
    this.$nextTick(() => {
      this.showList = false;
    });
  }

  onBlur() {
    // console.log('onBlur');
    // this.isInputFocused = false;
  }

  // TODO: change any
  outsideClick(event: Event): void {
    const e = event.target as HTMLInputElement;
    if (!this.$el.contains(e)) {
      // this.isInputFocused = false;
      // this.hideOptions();
      if (!this.menuRef.contains(e)) {
        this.hideOptions();
        this.isInputFocused = false;
      }
      // if (this.deleteBtnRef.$el.contains(event.target as HTMLInputElement)) {
      //   // this.isInputFocused = false;
      // } else {
      //   // this.isInputFocused = false;
      // }
    }
  }

  onKeyUp(event: KeyboardEvent): void {
    // if any key code in the list is pressed do nothing
    if (keyList.includes(event.key)) {
      console.log('ket');
    }
    // otherwise filter the list based on value that user is typing
    // this.filteredOptions = this.options.filter((option: ISelectOptions) => option.title.toLowerCase().includes(this.inputVal.toLowerCase()));
  }

  splitAtIndex(value, index) {
    return `${value.substring(0, index)},${value.substring(index)}`;
  }

  filterInputs(input, index: number, event: KeyboardEvent) {
    this.isInputFocused = true;
    this.updateButtonText();
    // if it's the first input and it doesn't have a value so empty search button
    if (index === 0 && !input.value) {
      this.buttonSearchText = '';
    }
    this.isInputFocused = true;
    // update input width based on value length
    this.tagRef[index].style.width = `${input.value.length}ch`;

    // check if there's : in the word
    const regex = /([^ \\:]+ ?){1,2}: ?$/;
    // const regex = /([^:\s]+ ?){1,2}:/;
    const myRegexp = new RegExp(regex);
    const match = myRegexp.exec(input.value);

    // this.inputs[index].width = `${0}ch`;
    if (match) {
      const availableLabel = this.options.filter((option) => option?.title?.toLowerCase() === match[0]);
      // check if the label exists in the list
      if (availableLabel.length) {
        event.preventDefault();
        this.inputs[index].value = input.value.replace(match[0], '');
        if (!availableLabel[0].isUnique) {
        // if label is not unique so create the label
          this.$nextTick(() => {
            this.tagRef[index].style.width = `${input.value.length}ch`;
            this.tagRef[index + 1].focus();
            this.isInputFocused = true;
          });

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
        }
      // event.target.value = ''
      }
    } else {
      const indicesArr = [];
      const matchLabel = this.options.map((i) => i.title);
      // matchLabel.sort((a, b) => b.length - a.length);
      const regexObj = new RegExp(matchLabel.map((x) => x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'gi');
      let matches;
      // eslint-disable-next-line no-cond-assign
      while (matches = regexObj.exec(input.value)) {
        const obj = { start: matches.index, end: regexObj.lastIndex };
        indicesArr.push(obj);
      }
      console.log(indicesArr);
      if (indicesArr.length) {
        const finalArr: IInput[] = [];
        const str = input.value;
        let lastIndex;
        indicesArr.forEach((item, index) => {
          const title = input.value.substring(item.start, item.end);
          // console.log(str, 'str');
          if (lastIndex) {
            // console.log('lastIndex', slm, str.substring(lastIndex, item.start));
            // slm[slm.length - 1].value = str.substring(0, item.start);
          }
          // str = str.replace(title, '');

          lastIndex = item.end;
          // this.inputs[index].title = title;
          const last = indicesArr.length - 1 > index ? indicesArr[index + 1].start : indicesArr.length;
          // console.log(str.substring(item.end, last), 'str.substring(item.end, last)', item.end, last);
          console.log(item.end, 'item.end');
          console.log(last, 'last');
          finalArr.push({
            title,
            value: indicesArr.length - 1 > index
              ? str.substring(item.end, indicesArr[index + 1].start) : str.substring(item.end),

          });
          console.log(finalArr, 'slm', last);

          // this.inputs.push({
          //   title,
          //   value: input.value.replace(title, ''),
          // });
          // this.inputs[index].value = labelVal.replace(title, '');
        });
        finalArr.push({ title: null, value: '', disabled: true });
        this.inputs = finalArr;
      }
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
        const shayeste = this.options.filter(
          (objFromA) => !this.inputs.find(
            (objFromB) => objFromA.title === objFromB.title && objFromA.isUnique,
          ),
        );

        this.filteredOptions = shayeste.filter((option) => option?.title
          ?.toLowerCase()
          .includes(input.value.trim().toLowerCase()));
      }
    } else {
      console.log('heree');
      if (index === 0 && !input.value) {
        this.hideOptions();
      } else {
        this.showOptions();
        this.showMenueList = false;
      }
    }
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
    window.removeEventListener('keyup', this.onEscPress);
  }

  created() {
    window.addEventListener('keypress', this.onSlashPress);
    window.addEventListener('keyup', this.onEscPress);
  }

  onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const input = this.$el.getElementsByTagName('input');
      const inputList = Array.prototype.slice.call(input);
      inputList.forEach((element) => {
        element.blur();
      });
      this.hideOptions();
    }
  }

  onSlashPress(event: KeyboardEvent) {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      event.preventDefault();
      if (event.key === '/') {
        if (this.inputs[this.inputs.length - 1].disabled) {
          this.focusNextInput(this.inputs.length - 2);
        } else {
          this.focusNextInput(this.inputs.length - 1);
        }
      }
    }
  }

  inputWidthHandler(input: IInput, index: number): boolean | undefined {
    return (!input.title && !input.value.trim() && !input.disabled)
    || (!input.value && !input.disabled)
    || (this.inputs.length - 1 === index && !input.disabled)
    || (this.inputs.length - 2 === index && this.inputs[this.inputs.length - 1].disabled);
  }

  deleteInputHandler(event) {
    this.inputs = [{ title: null, value: '', disabled: false }];
    this.buttonSearchText = '';
    this.filteredOptions = this.options;

    if (this.isInputFocused) {
      this.focusNextInput(0);
      this.showOptions();
    }
  }

  labelClickHandler(index: number) {
    this.focusNextInput(index);
    this.$nextTick(() => {
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index]?.select();
    });
  }
}
