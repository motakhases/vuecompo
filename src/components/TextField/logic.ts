import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
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
    unit: {
      type: String,
      default: '',
    },
    limit: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'text',
    },
    separator: {
      type: String,
      default: 'none',
    },
  },
  data() {
    return {
      activeLabel: !!this.value.length,
    };
  },
  computed: {
    formattedValue(): String {
      // format the value based on separator for type === number
      if (this.type === 'number') {
        switch (this.separator) {
        case 'comma':
          return this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        case 'dash':
          return this.value.replace(/\B(?=(\d{4})+(?!\d))/g, '-');
        case 'none':
          return this.value;
        default:
          return this.value;
        }
      } else {
        return this.value;
      }
    },
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
  },
});
