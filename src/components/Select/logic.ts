/* eslint-disable class-methods-use-this */
import {
  Vue, Component, Prop, Ref, Watch,
} from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';
import Icon from '@/components/Icon/index.vue';

import { ISelectOptions, IEvent } from '@/types';

const keyList = ['ArrowUp', 'ArrowDown', 'Enter'];

@Component({
  components: {
    ValidationProvider,
    Icon,
  },
})
export default class Select extends Vue {
  // @VModel({ type: String }) model!: string

  /**
   * Props
   */
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean

  @Prop({ type: String }) readonly label?: string

  @Prop({ type: String }) readonly hint?: string

  @Prop({ type: String }) readonly successMessage?: string

  @Prop({ type: Array }) readonly options!: ISelectOptions[]

  @Prop({ type: Boolean }) readonly loading?: boolean

  @Prop({ type: Boolean }) readonly search?: boolean

  @Prop({ type: String }) readonly rules?: string

  @Prop({ type: String }) readonly placeholder?: string

  @Prop({ type: String, default: '' }) readonly value!: string

  /**
   * Refs
   */
  @Ref() readonly optionRef!: Element

  @Ref() readonly menuRef!: HTMLElement

  @Ref() readonly inputRef!: HTMLElement

  /**
   * Data options
   */
  isInputFocused = false

  isBoxFocused = false

  showList = false

  activeOptionIndex = -1

  filteredOptions: ISelectOptions[] = []

  inputVal = ''

  style = {
    top: '',
    left: '',
    width: '',
  };

  get inputModel():string {
    return this.inputVal;
  }

  set inputModel(value:string) {
    this.inputVal = this.options ? this.options.filter((i) => i.value === this.value)[0].text : '';
  }

  /**
   * Mounted
   */
  mounted():void {
    document.documentElement.addEventListener(
      'click',
      this.outsideClick,
      false,
    );
    document.addEventListener('scroll', this.updateStyle);
    // this.inputRef.children[0].addEventListener('click', this.onButtonClick, false);
    window.addEventListener('resize', this.onResize);
  }

  created(): void {
    this.inputVal = this.options && this.value.length
      ? this.options.filter((i) => i.value === this.value)[0].text : '';
    this.isInputFocused = !!this.value.length;
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

  inputHandler(event:Event): void {
    this.inputVal = (event.target as HTMLInputElement).value;
  }

  onFocusIn(event:KeyboardEvent):void {
    // for adding active label style
    this.isInputFocused = true;
    this.isBoxFocused = true;

    // open dropdown
    this.showOptions();
    this.filteredOptions = this.options;
    const isEnterKey = event.key === 'Enter';
    if (isEnterKey) {
      this.showOptions();
    }
  }

  onFocusOut():void {
    if (!this.value || !this.inputVal) {
      this.isInputFocused = false;
    }
    // to remove active class
    this.activeOptionIndex = -1;
  }

  selectOption(value:string, text:string):void {
    this.inputVal = text;
    this.$emit('input', value);
    this.hideOptions();
    this.isInputFocused = true;
    this.isBoxFocused = false;
  }

  showOptions():void {
    this.showList = true;
  }

  hideOptions():void {
    this.$nextTick(() => {
      this.showList = false;
    });
  }

  // TODO: change any
  outsideClick(event:Event):void {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      this.hideOptions();
      this.isBoxFocused = false;
      if (!this.value || !this.inputVal) {
        this.isInputFocused = false;
      }
    }
  }

  onKeyUp(event:KeyboardEvent):void {
    // if any key code in the list is pressed do nothing
    if (keyList.includes(event.key)) {
      return;
    }

    // otherwise filter the list based on value that user is typing
    this.filteredOptions = this.options.filter(
      (option:ISelectOptions) => option.text.toLowerCase().includes(this.inputVal.toLowerCase()),
    );
  }

  onKeyDown(e:KeyboardEvent):void {
    const isArrowDownKey = e.key === 'ArrowDown';
    const isArrowUpKey = e.key === 'ArrowUp';
    const isEnterKey = e.key === 'Enter';

    // if dropdown is open
    if (this.showList) {
      // if arrow up or down key is pressed
      if (isArrowDownKey || isArrowUpKey) {
        for (let i = 0; i < this.filteredOptions.length; i += 1) {
          // find the active option based on class
          const item = this.menuRef.children[i];
          const activeOption = (item).classList.contains('active');

          // if there is active option then remove the active class and
          // update the index of active option in order to move active class
          if (activeOption) {
            this.activeOptionIndex = i;
            (item).classList.remove('active');
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
          // take the name of active option
          const newValue = this.filteredOptions[this.activeOptionIndex]
            ? this.filteredOptions[this.activeOptionIndex].text : '';

          // update the value of input
          // this.$emit('updateData', newValue);
          this.inputVal = newValue;
          // close the dropdown
          this.hideOptions();

          // disable the active option
          this.activeOptionIndex = -1;
        }
      }
      // if dropdown is closed and enter key is pressed
    } else if (isEnterKey) {
      // open the dropdown
      this.showOptions();
      // show the compelete list
      this.filteredOptions = this.options;
    }
  }

  activateOption(e:IEvent):void {
    // if any option has active class remove it
    [].forEach.call(this.optionRef, (el:HTMLElement) => {
      el.classList.remove('active');
    });
    // add active class when a mouse enters
    e.target.classList.add('active');
  }

  deactivateOption(e:IEvent):void {
    e.target.classList.remove('active');
  }

  onResize():void {
    this.$nextTick(() => {
      // update position of menue when window is resizing
      if (this.showList) {
        this.updateStyle();
      }
    });
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
  }
}
