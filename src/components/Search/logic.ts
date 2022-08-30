/* eslint-disable class-methods-use-this */
import {
  Vue, Component, Prop, Ref, Watch,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import { ISelectOptions, IEvent } from '@/types';
import Label from '@/components/Label/index.vue';
import Button from '@/components/Button/index.vue';

const keyList = ['ArrowUp', 'ArrowDown', 'Enter'];
interface IInput{
  title:string | null;
  value:string
  disabled?:boolean
}
interface ISelectItem{
  title:string;
  text:string
  isUnique?:boolean
  value: string
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

  @Prop({ type: String, default: '' }) readonly value!: string;

  /**
   * Refs
   */
  @Ref() readonly optionRef!: Element;

  @Ref() readonly menuRef!: HTMLElement;

  @Ref() readonly inputRef!: HTMLElement;

  /**
   * Data options
   */
  isInputFocused = false;

  isBoxFocused = false;

  showList = false;

  activeOptionIndex = -1;

  filteredOptions: ISelectItem[] = [];

  inputValue = '';

  buttonSearchText = '';

  showMenueList = true;

activeInput=0

inputs:IInput[] = [{ title: null, value: '', disabled: false }];

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
      } else if (!this.isBoxFocused) {
      // this.isInputFocused = false;
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

  inputHandler(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  // onBoxclick() {
  //   if (this.isTagValue) {
  //     this.$nextTick(() => {
  //       this.$el
  //         .querySelectorAll<HTMLInputElement>('.tag-input')
  //         [this.tagList.length - 1]?.focus();
  //     });
  //   }
  // }

  onFocusIn(event: KeyboardEvent): void {
    // for adding active label style
    this.isBoxFocused = true;

    // open dropdown
    this.showMenueList = true;
    this.showOptions();
    // this.filteredOptions = this.options;
    // const isEnterKey = event.key === 'Enter';
    // if (isEnterKey) {
    //   this.showOptions();
    // }
  }

  activeInputHandler() {
    const isInputActive = document.querySelector('.zpl-search')?.classList.contains('focused');
    if (isInputActive) {
      this.isInputFocused = true;
    } else {
      this.isInputFocused = false;
    }
  }

  onFocusOut(): void {
    if (!this.value || !this.inputValue) {
      // this.isInputFocused = false;
    }
    // to remove active class
    this.activeOptionIndex = -1;
  }

  selectOption(option, index): void {
    // this.inputVal = text;
    this.$emit('input', option.value);
    this.hideOptions();
    this.isBoxFocused = false;
    this.activeInputHandler();
    // const decs = title.concat(text);
    // this.textareaValue = this.textareaValue.concat(decs);
    // this.inputValue = this.inputValue.concat(title);
    if (option.title) {
    //   // this.tagList = [...this.tagList, { label: title }];
    //   this.$set(this.tagList, this.tagList.length, { label: title });
    //   this.isTagValue = true;
    //   console.log(this.isTagValue);
      this.$nextTick(() => {
        this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[this.inputs.length - 2]?.focus();
      });
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
      this.filteredOptions.splice(index, 1);
    }
  }

  removeInput(input, index: number, event) {
    if (index === 0) {
      this.onFocusIn(event);
      this.buttonSearchText = '';
      if (input.title && !input.value) {
        this.inputs.splice(index, 1);
        if (!this.inputs.length) {
          this.inputs.push({
            title: null,
            value: 'r',
            disabled: false,
          });
        } this.filteredOptions = this.options;
      }
    } else if (!input.value && (index > 0 || input.title)) {
      this.inputs.splice(index, 1);
      // this.inputs[index].disabled = false;
      this.activeInput = index - 1;

      // activeInput === index
      this.$nextTick(() => {
        this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index - 1]?.focus();
      });
    }
  }

  activeNextInput(value: string, index: number) {
    this.showMenueList = true;
    console.log('space');
    this.showOptions();
    // this.filteredOptions = this.options;
    this.activeInput = index;
    // this.buttonSearchText = '';
    if (this.inputs[index].title) {
      if (value) {
        this.inputs[index + 1].disabled = false;

        this.$nextTick(() => {
          this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index + 1]?.focus();
        });
      }
    } else if (value.trim()) {
      if (index === this.inputs.length - 1) {
        this.inputs.push({
          title: null,
          value: '',
          disabled: false,
        });
        this.$nextTick(() => {
          this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index + 1]?.focus();
        });
      } else {
        this.inputs[index + 1].disabled = false;
        this.showOptions();
        this.$nextTick(() => {
          this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index + 1]?.focus();
        });
      }
    }
    this.filteredOptions = this.options;
    const me = this.options.filter((i) => {
      console.log(i);
    const shayest=  this.inputs.filter((md) => {
        console.log(md.title === i.title && i.isUnique);
        // md.title === i.title && i.isUnique), 'hy  '
        if(!i.isUnique){
          return i
        }else{
           if (md.title === i.title && i.isUnique) {

        } else {
          return i;
        }
        }
       
      });
      // if (i.isUnique) {
console.log('shayeste', shayest)
      // },
      // return !i.isUnique;
      // if (this.inputs.map((m) => m.title !== i.title && !i.isUnique)) {
      //   return i;
      // }
      // (i.isUnique ? !this.inputs.some((m) => m.title === i.text) : '');
    });
    console.log(this.filteredOptions, 'this.filteredOptions');
    console.log(me, 'me');
  }

  inputsHandler(input, event: Event) {
    (event?.target as HTMLTextAreaElement)?.setAttribute('size', input.value.length);
    if (input.value.trim()) {
      const list: string[] = [];
      if (input.title) {
        // this.showMenueList = false;
      }
      // this.showOptions();
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
      this.isBoxFocused = false;
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

  filterInputs(input, event: KeyboardEvent) {
    // this.filteredOptions = this.options;
    if (!input.title) {
      this.filteredOptions = this.filteredOptions.filter((option) => option?.title?.toLowerCase().includes(input.value.trim().toLowerCase()));
    }
    console.log('here');
  }

  onKeyDown(index, e: KeyboardEvent): void {
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
          this.selectOption(this.filteredOptions[this.activeOptionIndex], index);

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

  wrapper(index) {
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
  }
}
