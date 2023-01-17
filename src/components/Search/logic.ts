/* eslint-disable class-methods-use-this */
import { Vue, Component, Prop, Ref, Watch } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import { IEvent } from '@/types';
import Label from '@/components/Label/index.vue';
import Button from '@/components/Button/index.vue';

interface IInput {
  title: string | null;
  value: string;
  disabled?: boolean;
  key: string;
}
interface ISearch {
  [key: string]: string;
}
interface ISelectItem {
  title: string;
  isUnique?: boolean;
  value: string;
  key: string;
}
interface IItemPosition {
  start: number;
  end: number;
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

  @Prop({ type: Function }) readonly onSearch!: (value: ISearch) => void;

  @Prop({ type: String, default: '' }) readonly value!: string;

  @Prop({ type: String, default: 'text' }) readonly descriptionKey!: string;

  @Prop({ type: String, default: '' }) readonly labelWidth?: string;

  /**
   * Refs
   */
  @Ref() readonly optionRef!: Element;

  @Ref() readonly menuRef!: HTMLElement;

  @Ref() readonly inputRef!: HTMLElement;

  @Ref() readonly tagRef!: HTMLElement;

  @Ref() readonly deleteBtnRef!: HTMLElement;

  @Ref() readonly shallowTextRef!: HTMLElement;

  /**
   * Data options
   */
  isInputFocused = false;

  showList = false;

  activeOptionIndex = -1;

  filteredOptions: ISelectItem[] = [];

  buttonSearchText = '';

  showMenueList = true;

  activeInput = 0;

  inputs: IInput[] = [
    {
      title: null,
      value: '',
      disabled: false,
      key: this.descriptionKey,
    },
  ];

  style = {
    top: '',
    left: '',
    width: '',
  };

  /**
   * Mounted
   */
  mounted(): void {
    document.documentElement.addEventListener('click', this.outsideClick, true);
    document.addEventListener('scroll', this.updateStyle);
    window.addEventListener('resize', this.onResize);
    this.filteredOptions = this.options;
    if (this.value) {
      this.inputs[0].value = this.value;
      this.checkValidLabel(this.inputs[0], 0);
      this.shallowTextRef[0].innerHTML = this.inputs[0].value;
      this.tagRef[0].blur();
      this.$nextTick(() => {
        this.onBlur();
        this.isInputFocused = false;
      });
    }
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
      const { height, top, left, width } = this.inputRef?.children[0]?.getBoundingClientRect();
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

  onFocusIn(input: IInput, index: number): void {
    // open dropdown
    this.isInputFocused = true;

    if (input) {
      if (this.inputs[index]?.title) {
        if (index === 0 && !this.inputs[index]?.value) {
          // this.hideOptions();
        } else if (this.buttonSearchText) {
          this.showMenueList = false;
          this.showOptions();
        } else {
          this.showMenueList = false;
          this.updateButtonText();
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

  selectOption(option: ISelectItem): void {
    this.showMenueList = false;
    this.$emit('input', option.value);
    this.hideOptions();
    this.isInputFocused = true;
    if (option.title) {
      this.isInputFocused = true;
      this.$nextTick(() => {
        this.tagRef[this.inputs.length - 2]?.focus();
      });
    }
    const inputsLatestObjectIndex = this.inputs.length - 1;

    if (this.inputs.length > 1) {
      const lastInputVal: string[] = this.inputs[inputsLatestObjectIndex - 1].value.split(' ');
      const arr: string[] = [];
      lastInputVal.forEach((item: string) => {
        if (!option.title.includes(item)) {
          arr.push(item);
        }
      });
      this.inputs[inputsLatestObjectIndex - 1].value = arr.join(',');
      this.$nextTick(() => {
        this.shallowTextRef[inputsLatestObjectIndex - 1].innerHTML = arr.join(',');
      });
    }

    if (!this.inputs[inputsLatestObjectIndex].value) {
      this.inputs[inputsLatestObjectIndex] = {
        title: option.title,
        value: '',
        key: option.key,
      };
    } else {
      const empty = this.inputs.indexOf(this.inputs.filter((i) => !i.title && !i.value.trim())[0]);
      if (empty) {
        this.inputs.splice(empty, 1);
      }
      this.inputs.push({
        title: option.title,
        value: '',
        key: option.key,
      });
    }

    this.inputs.push({
      title: null,
      value: '',
      disabled: true,
      key: this.descriptionKey,
    });
  }

  removeInput(input: IInput, index: number, event: Event) {
    const { value } = event.target as HTMLInputElement;
    if (index === 0) {
      this.buttonSearchText = '';
      if (input.title && !value) {
        this.inputs.splice(index, 1);
        if (!this.inputs.length) {
          this.inputs.push({
            title: null,
            value: '',
            disabled: false,
            key: this.descriptionKey,
          });
        } else {
          this.inputs[index].disabled = false;
        }
        this.filteredOptions = this.options;
      }
      if (!input.title && !value) {
        this.showOptions();
        this.filteredOptions = this.options;
      }
    } else if ((!value && input.title) || !value) {
      this.inputs.splice(index, 1);
      this.activeInput = index - 1;
      // focus on previous input
      this.$nextTick(() => {
        this.tagRef[index - 1]?.focus();
        this.isInputFocused = true;
      });
    }
    if (value) {
      this.filteredOptions = this.options.filter((option) =>
        option?.title?.toLowerCase().includes(value.trim().toLowerCase()),
      );
    }
  }

  focusNextInput(index: number) {
    this.$nextTick(() => {
      this.tagRef[index]?.focus();
      this.isInputFocused = true;
    });
  }

  activeNextInput(value: string, index: number) {
    this.activeInput = index;
    this.filteredOptions = this.options.filter(
      (objFromA) => !this.inputs.find((objFromB) => objFromA.title === objFromB.title && objFromA.isUnique),
    );
  }

  updateButtonText() {
    const list: string[] = [];
    this.inputs.forEach((item) => {
      if (item.value) {
        list.push(`${item.title ?? ''} ${item.value}`);
      }
    });
    this.buttonSearchText = `"${list.join(' ')}"`;
  }

  inputsHandler(input: IInput, event: Event, index: number) {
    event.stopPropagation();
    this.shallowTextRef[index].innerHTML = input.value;
    if (input.value.trim()) {
      this.updateButtonText();
    } else if (index === 0) {
      this.showMenueList = true;
      if (!input.value) {
        this.filteredOptions = this.options;
      }
    }
    this.checkValidLabel(input, index);
  }

  checkValidLabel(input, index) {
    // update input width based on value length
    this.$nextTick(() => {
      this.tagRef[index].style.width = `${this.shallowTextRef[index].getBoundingClientRect().width}px`;
    });
    // check if there's : in the word
    const regex = /^.*:/;
    const myRegexp = new RegExp(regex);
    const match = myRegexp.exec(input.value);
    if (match) {
      const containLabel: ISelectItem[] = this.options.filter((option) =>
        match[0].includes(option?.title?.toLowerCase()),
      );
      if (containLabel) {
        const indicesArr: IItemPosition[] = [];
        const matchLabel = this.options.map((i) => i.title);
        const regexObj = new RegExp(
          matchLabel
            // eslint-disable-next-line no-useless-escape
            .map((x) => x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
            .join('|'),
          'gi',
        );
        let matches;

        // eslint-disable-next-line no-cond-assign
        while ((matches = regexObj.exec(input.value))) {
          const obj: IItemPosition = {
            start: matches.index,
            end: regexObj.lastIndex,
          };
          indicesArr.push(obj);
        }
        if (indicesArr.length) {
          const finalArr: IInput[] = [];
          let str = input.value;
          indicesArr.forEach((item, i) => {
            const title = input.value.substring(item.start, item.end);
            if (i === 0 && item.start > 0) {
              finalArr.push({
                title: null,
                value: str.substring(0, item.start).trim().replace(/  +/g, ' '),
                key: this.descriptionKey,
              });
              this.shallowTextRef[index].innerHTML = str.substring(0, item.start).replace(/  +/g, ' ');
              this.$nextTick(() => {
                this.tagRef[index].style.width = `${this.shallowTextRef[index].getBoundingClientRect().width}px`;
              });
            }
            finalArr.push({
              title,
              value:
                indicesArr.length - 1 > i
                  ? str
                    .substring(item.end, indicesArr[i + 1].start)
                    .trim()
                    .replace(/  +/g, ' ')
                  : str.substring(item.end).trim().replace(/  +/g, ' '),
              key:
                this.options.filter((option) => (option.title === title ? option.key : ''))[0].key ??
                this.descriptionKey,
            });

            this.shallowTextRef[index].innerHTML =
              indicesArr.length - 1 > i
                ? str
                  .substring(item.end, indicesArr[i + 1].start)
                  .trim()
                  .replace(/  +/g, ' ')
                : str.substring(item.end).trim().replace(/  +/g, ' ');
          });
          finalArr.forEach((item) => {
            const availableInput = this.inputs.filter((inputEl) => inputEl.key === item.key);
            const isUniqueIn = this.options.filter((element) => element.key === availableInput[0]?.key);

            if (!item.title) {
              this.inputs[index].value = item.value;
            } else {
              str = str.replace(item.title, '');
              str = str.replace(item.value, '');
              if (!isUniqueIn[0]?.isUnique || (availableInput && !isUniqueIn[0]?.isUnique)) {
                this.inputs.splice(index + 1, 0, item);
              }
            }

            if (!str.trim().length) {
              this.inputs.splice(index, 1);
            }
            this.inputs = this.inputs.filter((inp) => inp.disabled !== true);
          });
          // eslint-disable-next-line no-return-assign
          this.inputs.forEach((inp, ind) => {
            if (this.shallowTextRef[ind]) {
              this.shallowTextRef[ind].innerHTML = inp.value;
            }
          });
          if (!this.inputs[this.inputs.length - 1].disabled) {
            this.inputs.push({
              title: null,
              value: '',
              disabled: true,
              key: this.descriptionKey,
            });
          }
          this.$nextTick(() => {
            this.tagRef[this.inputs.length - 2].focus();
            this.isInputFocused = true;
          });
        }
        this.tagRef[index].style.width = `${this.shallowTextRef[index].getBoundingClientRect().width}px`;
      }
    }
    this.$nextTick(() => {
      this.inputs.forEach((inp, ind) => {
        this.tagRef[ind].style.width = `${this.shallowTextRef[ind].getBoundingClientRect().width}px`;
      });
    });
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

  notLastInput(index: number) {
    if (this.inputs[index + 1]) {
      if (this.inputs[index + 1].disabled) {
        return true;
      }
    } else {
      return false;
    }
    return false;
  }

  onSearchClick(): void {
    this.hideOptions();
    const filteredSearchRes = this.inputs
      .filter((i) => !i.disabled && i.value.trim().length)
      .map((i) => ({ [i.key]: this.toEnNumber(i.value.trim()) }));
    this.onSearch(filteredSearchRes.reduce((r, c) => Object.assign(r, c), {}));
  }

  // TODO: change any
  outsideClick(event: Event): void {
    const e = event.target as HTMLInputElement;
    if (!this.$el.contains(e)) {
      if (!this.menuRef?.contains(e)) {
        this.hideOptions();
        this.isInputFocused = false;
      }
    }
  }

  splitAtIndex(value: string, index: number) {
    return `${value.substring(0, index)},${value.substring(index)}`;
  }

  filterInputs(input: IInput, index: number, event: KeyboardEvent) {
    function test(words) {
      const n = words.split(' ');
      return n[n.length - 1];
    }
    const filterUniqueItem = this.options.filter(
      (objFromA) => !this.inputs.find((objFromB) => objFromA.title === objFromB.title && objFromA.isUnique),
    );
    this.filteredOptions = filterUniqueItem.filter((option) =>
      option?.title?.toLowerCase().includes(test(input.value)),
    );

    event.stopPropagation();
    this.isInputFocused = true;
    this.updateButtonText();
    // if it's the first input and it doesn't have a value so empty search button
    if (index === 0 && !input.value) {
      this.buttonSearchText = '';
      if (!input.title) {
        if (event.key !== 'Escape') {
          this.focusNextInput(0);
        }
        this.showOptions();
        this.showMenueList = true;
      }
    }

    const isEnterKey = event.key === 'Enter';

    if (!input.title) {
      if (index === 0 && !input.value) {
        this.filteredOptions = this.options;
      }
    } else if (index === 0 && !input.value && input.title) {
      this.hideOptions();
    } else if (input.title && !input.value) {
      this.showOptions();
      this.showMenueList = false;
    } else if (!isEnterKey) {
      this.showOptions();
      this.showMenueList = true;
    }

    this.inputs.forEach((item, i) => {
      this.$nextTick(() => {
        this.tagRef[i].style.width = `${this.shallowTextRef[i].getBoundingClientRect().width}px`;
      });
    });
    this.onEscPress(event);
  }

  enter() {
    if (this.activeOptionIndex < 0) {
      this.onSearchClick();
      this.hideOptions();
      this.isInputFocused = false;
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
          // close the dropdown
          this.selectOption(this.filteredOptions[this.activeOptionIndex]);
          this.hideOptions();
          // disable the active option
          this.activeOptionIndex = -1;
        }
      }
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
  }

  created() {
    window.addEventListener('keypress', this.onSlashPress);
  }

  onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onBlur();
    }
  }

  onBlur() {
    const input = this.$el.getElementsByTagName('input');
    const inputList = Array.prototype.slice.call(input);
    inputList.forEach((element) => {
      element.blur();
    });
    this.hideOptions();
  }

  onSlashPress(event: KeyboardEvent) {
    if (!this.$el.contains(event.target as HTMLInputElement)) {
      if (event.key === '/') {
        event.preventDefault();

        if (this.inputs[this.inputs.length - 1].disabled) {
          this.focusNextInput(this.inputs.length - 2);
        } else {
          this.focusNextInput(this.inputs.length - 1);
        }
      }
    }
  }

  inputWidthHandler(input: IInput, index: number): boolean | undefined {
    return (
      (!input.title && !input.value.trim() && !input.disabled) ||
      (!input.value && !input.disabled) ||
      (this.inputs.length - 1 === index && !input.disabled) ||
      (this.inputs.length - 2 === index && this.inputs[this.inputs.length - 1].disabled)
    );
  }

  deleteInputHandler() {
    this.buttonSearchText = '';
    this.filteredOptions = this.options;
    if (this.isInputFocused) {
      this.focusNextInput(0);
      this.showOptions();
      this.showMenueList = true;
    }
    this.$router.replace({ query: {} });

    this.inputs = [
      {
        title: null,
        value: '',
        disabled: false,
        key: this.descriptionKey,
      },
    ];
  }

  labelClickHandler(index: number) {
    this.focusNextInput(index);
    this.$nextTick(() => {
      this.$el.querySelectorAll<HTMLInputElement>('.tag-input')[index]?.select();
    });
  }

  toEnNumber(payload: number | string): string {
    const modifiedToEnNumber = payload
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => (d.charCodeAt(0) - 1632).toString())
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string) => (d.charCodeAt(0) - 1776).toString());

    return payload === '' ? payload : modifiedToEnNumber;
  }
}
