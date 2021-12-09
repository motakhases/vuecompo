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
    value: {
      type: String,
      default: '',
    },
    fromInput: {
      type: String,
      default: '',
    },
    toInput: {
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
      from: this.fromInput,
      to: this.toInput,
    };
  },
  computed: {
    firstInput: {

      get(): string {
        return this.to;
      },
      set(val) {
        this.to = val;
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
      console.log(this.date);

      this.from = moment(firstDate, 'YYYY-M-D').format('jYYYY/jM/jD');

      this.to = secondDate ? moment(secondDate, 'YYYY-M-D').format('jYYYY/jM/jD') : '';
    },
  },
  methods: {
    firstInputHandler(e) {
      console.log(this.from, this.date);
      if (this.from) {
        const newValue = moment(this.from, 'jYYYY/jM/jD').format('YYYY-M-D');
        this.date.splice(0, 1, newValue);
      }
    },
    secondInputHandler(e) {
      console.log(this.to, this.date);
      if (this.to) {
        const newValue = moment(this.to, 'jYYYY/jM/jD').format('YYYY-M-D');
        this.date.splice(1, 1, newValue);
      }

      // const newValue = moment(this.to, 'jYYYY/jM/jD').format('YYYY-M-D');
      // this.date.splice(1, 1, this.gregorianToJalali(this.to));
    },
    gregorianToJalali(value : string) {
      return moment(value, 'jYYYY/jM/jD').format('YYYY-M-D');
    },
  },
});
