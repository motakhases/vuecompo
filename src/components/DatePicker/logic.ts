import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import moment from 'moment-jalaali';
import Icon from '../Icon/index.vue';
import TextField from '@/components/TextField/index.vue';

export default Vue.extend({
  name: 'DatePicker',
  components: { Icon, VuePersianDatetimePicker, TextField },
  props: {
    range: {
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
    date: Array<string>;
    from: string;
    to: string;
    } {
    return {
      date: [],
      from: this.startInput,
      to: this.endInput,
    };
  },
  computed: {
    firstInput: {

      get(): string {
        return this.from;
      },
      set(val) {
        this.from = val;
      },
    },
    secondInput: {
      // if (this.date.length) {
      //   const [firstDate, secondDate] = this.date;
      //   return secondDate;
      // }
      // return '';
      get(): string {
        return this.to;
      },
      set(val) {
        this.to = val;
      },
    },
  },
  watch: {
    date() {
      const [firstDate, secondDate] = this.date;
      this.from = moment(firstDate, 'YYYY-M-D').format('jYYYY/jM/jD');
      this.to = secondDate ? moment(secondDate, 'YYYY-M-D').format('jYYYY/jM/jD') : '';
    },
  },
  methods: {
    firstInputHandler() {
      if (this.from) {
        const isValid = moment(this.from, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.from, 'jYYYY/jM/jD').format('YYYY-M-D');
          this.date.splice(0, 1, newValue);
        }
      }
    },
    secondInputHandler() {
      if (this.to) {
        const isValid = moment(this.to, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.to, 'jYYYY/jM/jD').format('YYYY-M-D');
          this.date.splice(1, 1, newValue);
        }
      }
    },
    gregorianToJalali(value : string) {
      return moment(value, 'jYYYY/jM/jD').format('YYYY-M-D');
    },
  },
});
