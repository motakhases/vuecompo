import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'TextField',

  components: { ValidationProvider, Icon },

  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    helperHint: {
      type: String,
      default: '',
    },
    successHint: {
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
      default: '',
    },
    beforeIcon: {
      type: String,
      default: '',
    },
    afterIcon: {
      type: String,
      default: '',
    },
    stepper: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      activeLabel: !!this.value.length,
    };
  },

  computed: {
    model: {
      get():string {
        return this.formattedValue();
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },

  watch: {
    formattedValue() {
      this.activeLabel = !!this.value.length;
    },
  },

  methods: {
    formattedValue(): string {
      // format the value based on separator for type === number
      if (this.type === 'number') {
        switch (this.separator) {
        case 'comma':
          return this.value.toLocaleString();
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
    onInput(event: any) {
      // update value of input and if they have , or - remove them
      const newValue = event.target.value.replace(/,/g, '').replace(/-/g, '');
      this.$emit('value', this.toEnNumber(newValue));
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
    toEnNumber(str: string) {
      // change all the Persian or Arabic numbers to English
      if (str === '') {
        return str;
      }
      return str
        .toString()
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => (d.charCodeAt(0) - 1632).toString())
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: string) => (d.charCodeAt(0) - 1776).toString());
    },
    onlyNumber(event: any) {
      // just accepts number and dot
      if (this.type === 'number') {
        if (!/\d/.test(event.key) && event.key !== '.') {
          return event.preventDefault();
        }
      }
      return true;
    },
    increment() {
      if (this.type === 'number') {
        if (this.value.length === 0) {
          this.$emit('input', this.toEnNumber('1'));
        } else {
          const newValue = (Number(this.value) + 1).toString();
          this.$emit('input', this.toEnNumber(newValue));
        }
      }
    },
    decrement() {
      const numberValue = Number(this.value);
      if (this.type === 'number' && numberValue > 0) {
        const newValue = (numberValue - 1).toString();
        this.$emit('input', this.toEnNumber(newValue));
      }
    },
  },
});
