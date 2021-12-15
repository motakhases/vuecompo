import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import moment from 'moment-jalaali';
import Icon from '@/components/Icon/index.vue';
import TextField from '@/components/TextField/index.vue';

declare interface DateMoment {
  format: (a: string) => string,
  param: string
}

declare interface Attributes {
  class: string
}
export default Vue.extend({
  name: 'DatePicker',
  components: { Icon, VuePersianDatetimePicker, TextField },
  props: {
    range: {
      type: Boolean,
      default: false,
    },
    disableSingle: {
      type: Boolean,
      default: false,
    },
    disableStart: {
      type: Boolean,
      default: false,
    },
    disableEnd: {
      type: Boolean,
      default: false,
    },
    singleInput: {
      type: String,
      default: '',
    },
    startInput: {
      type: String,
      default: '',
    },
    endInput: {
      type: String,
      default: '',
    },
    preview: {
      type: Boolean,
      default: false,
    },
  },
  data(): {
    date: any;
    startValue: string;
    endValue: string;
    singleValue: string;
    } {
    return {
      date: [],
      startValue: this.startInput,
      endValue: this.endInput,
      singleValue: this.singleInput,
    };
  },
  watch: {
    singleValue(val) {
      this.$emit('singleValueHandler', val);
    },
    date(val) {
      this.$emit('singleValueHandler', this.gregorianToJalali(val));
      if (this.range) {
        const [firstDate, secondDate] = this.date;
        this.startValue = moment(firstDate, 'YYYY-M-D').format('jYYYY/jM/jD');
        this.endValue = secondDate
          ? moment(secondDate, 'YYYY-M-D').format('jYYYY/jM/jD')
          : '';

        if (moment(firstDate).isAfter(secondDate)) {
          this.date.splice(0, 1, secondDate);
          this.date.splice(1, 1, firstDate);
        }
      }
    },
    startValue(val) {
      this.$emit('startInput', val);
    },
    endValue(val) {
      this.$emit('endInput', val);
    },
  },
  mounted() {
    if (this.singleInput) {
      this.date = this.jalaliTogregorian(this.singleInput);
    }
    if (this.startInput) {
      this.date.splice(0, 1, this.jalaliTogregorian(this.startInput));
    }
    if (this.endInput) {
      this.date.splice(1, 1, this.jalaliTogregorian(this.endInput));
    }
  },
  methods: {
    firstInputHandler() {
      if (this.startValue) {
        const isValid = moment(this.startValue, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.startValue, 'jYYYY/jM/jD').format(
            'YYYY-M-D',
          );
          this.date.splice(0, 1, newValue);
        }
      }
    },
    secondInputHandler() {
      if (this.endValue) {
        const isValid = moment(this.endValue, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.endValue, 'jYYYY/jM/jD').format(
            'YYYY-M-D',
          );
          this.date.splice(1, 1, newValue);
        }
      }
    },
    gregorianToJalali(value: string) {
      return moment(value, 'YYYY-M-D').format('jYYYY/jM/jD');
    },
    jalaliTogregorian(value: string) {
      return moment(value, 'jYYYY/jM/jD').format('YYYY-M-D');
    },
    highlightToday(formatted: string, dateMoment: DateMoment) {
      const attributes = {} as Attributes;
      if (dateMoment.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        attributes.class = 'is-today';
      }
      return attributes;
    },
  },
});
