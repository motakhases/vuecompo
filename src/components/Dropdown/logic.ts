import Vue from 'vue';

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
  },
  data() {
    return {
      activeLabel: !!this.value.length,
      showList: false,
    };
  },
  methods: {
    onInput(event: any) {
      // update value of input and if they have , or - remove them
      const newValue = event.target.value.replace(/,/g, '').replace(/-/g, '');
      this.$emit('input', this.toEnNumber(newValue));
    },
    onFocusIn() {
      // for adding active label style
      this.activeLabel = true;

      // for showing dropdown list
      // this.showList = !this.showList;
    },
    onFocusOut() {
      // if input is empty put label inside input on focusing out
      if (!this.value) {
        this.activeLabel = false;
      }
    },
    toEnNumber(str: String) {
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
    selectOption(value: String) {
      // this.showList = false;
      this.$emit('input', this.toEnNumber(value));
    },
    click() {
      this.showList = !this.showList;
    },
    blur() {
      this.showList = false;
    },
  },
});
