import Vue from 'vue';

const ARROW_DOWN_KEYCODE = 40;
const ARROW_UP_KEYCODE = 38;
const ARROW_LEFT_KEYCODE = 37;
const ARROW_RIGHT_KEYCODE = 39;
const ENTER_KEYCODE = 13;
const TAB_KEYCODE = 9;

export default Vue.extend({
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'label',
    },
    hint: {
      type: String,
      default: 'helper',
    },
    hintText: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabledOptionId: {
      type: Number,
      default: null,
    },
  },
  data() :{
    activeLabel: boolean;
    focused: boolean;
    searchIndex: number;
    filteredOptions: Array<any>;} {
    return {
      activeLabel: !!this.value.length,
      focused: false,
      searchIndex: -1,
      filteredOptions: this.options,
    };
  },
  mounted() {
    document.documentElement.addEventListener('click', this.outsideClick, false);
  },
  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.outsideClick, false);
  },
  methods: {
    onInput(event: any) {
      // format all the numbers to English numbers and if they have , or - remove them
      const newValue = this.toEnNumber(
        event.target.value.replace(/,/g, '').replace(/-/g, ''),
      );
      // update value of input
      this.$emit('input', this.toEnNumber(newValue));
    },
    onFocusIn(event:any) {
      // for adding active label style
      this.activeLabel = true;
      // open dropdown
      this.showOptions();
      const isEnterKey = event.keyCode === ENTER_KEYCODE;
      if (isEnterKey) {
        this.showOptions();
      }
    },
    onFocusOut() {
      // if input is empty put label inside input
      if (!this.value) {
        this.activeLabel = false;
      }
      // to remove active class
      this.searchIndex = -1;
    },
    toEnNumber(str: string) {
      // change all the Persian or Arabic numbers to English
      if (str === '') {
        return str;
      }
      return str
        .toString()
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: String) => (d.charCodeAt(0) - 1632).toString())
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: String) => (d.charCodeAt(0) - 1776).toString());
    },
    onlyNumber(event: any) {
      // just accept number and dot
      if (this.type === 'number') {
        if (!/\d/.test(event.key) && event.key !== '.') {
          return event.preventDefault();
        }
      }
      return true;
    },
    selectOption(value: string) {
      // update the value of input with selected option
      this.$emit('input', value);

      // close the dropdown
      this.hideOptions();

      // for adding active label style
      this.activeLabel = true;
    },
    showOptions() {
      // open dropdown
      this.focused = true;
    },
    hideOptions() {
      // close dropdown
      this.$nextTick(() => {
        this.focused = false;
      });
    },
    outsideClick(e:any) {
      // close dropdown on clicking outside
      if (!this.$el.contains(e.target)) {
        this.hideOptions();
      }
    },
    onKeyUp(e:any) {
      const isEnterKey = e.keyCode === ENTER_KEYCODE;
      const isArrowDownKey = e.keyCode === ARROW_DOWN_KEYCODE;
      const isArrowUpKey = e.keyCode === ARROW_UP_KEYCODE;
      const isTabKey = e.keyCode === TAB_KEYCODE;
      const isArrowLeftKey = e.keyCode === ARROW_LEFT_KEYCODE;
      const isArrowRightKey = e.keyCode === ARROW_RIGHT_KEYCODE;

      if (isEnterKey
        || isArrowDownKey
        || isArrowUpKey
        || isTabKey
        || isArrowLeftKey
        || isArrowRightKey) {
        return;
      }
      if (this.value.length) {
        this.filteredOptions = this.options.filter(
          (option:any) => option.name.toLowerCase().includes(this.value),
        );
      } else {
        this.filteredOptions = this.options;
      }
    },
    onKeyDown(e:any) {
      const isArrowDownKey = e.keyCode === ARROW_DOWN_KEYCODE;
      const isArrowUpKey = e.keyCode === ARROW_UP_KEYCODE;
      const isEnterKey = e.keyCode === ENTER_KEYCODE;
      if (this.focused) {
        if (isArrowDownKey) {
          if (this.searchIndex < 0) {
            this.searchIndex = 0;
          } else if (this.searchIndex < this.filteredOptions.length - 1) {
            this.searchIndex += 1;
          } else if (this.searchIndex >= this.filteredOptions.length - 1) {
            this.searchIndex = 0;
          }
        } else if (isArrowUpKey) {
          if (this.searchIndex < 0) {
            this.searchIndex = 0;
          } else if (this.searchIndex === 0) {
            this.searchIndex = this.filteredOptions.length - 1;
          } else if (this.searchIndex <= this.filteredOptions.length - 1) {
            this.searchIndex -= 1;
          }
        } else if (isEnterKey) {
          if (this.searchIndex >= 0) {
            if (this.filteredOptions.length) {
              const newValue = this.filteredOptions[this.searchIndex].name;
              this.$emit('input', this.toEnNumber(newValue));
              this.hideOptions();
            }
          }
        }
      } else if (isEnterKey) {
        this.showOptions();
      }
    },
  },
});
