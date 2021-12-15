import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import moment from 'moment-jalaali';
import Icon from '@/components/Icon/index.vue';
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
    startValue: string;
    endValue: string;
sing:string
} {
    return {
      date: [],
      startValue: this.startInput,
      endValue: this.endInput,
      sing: this.value,
    };
  },
  computed: {
    model: {
      get():string {
        return this.sing;
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    sing(val) {
      this.$emit('val', val);
    },
    date() {
      const [firstDate, secondDate] = this.date;
      this.startValue = moment(firstDate, 'YYYY-M-D').format('jYYYY/jM/jD');
      this.endValue = secondDate ? moment(secondDate, 'YYYY-M-D').format('jYYYY/jM/jD') : '';

      if (moment(firstDate).isAfter(secondDate)) {
        // this.date.splice(0, 1, secondDate);
        // this.date.splice(1, 1, firstDate);
      }
    },
    startValue(val) {
      this.$emit('startInput', val);
    },
    endValue(val) {
      this.$emit('endInput', val);
    },
  },
  methods: {
    firstInputHandler() {
      if (this.startValue) {
        const isValid = moment(this.startValue, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.startValue, 'jYYYY/jM/jD').format('YYYY-M-D');
          this.date.splice(0, 1, newValue);
        }
      }
    },
    secondInputHandler() {
      if (this.endValue) {
        const isValid = moment(this.endValue, 'jYYYY/jMM/jDD').isValid();
        if (isValid) {
          const newValue = moment(this.endValue, 'jYYYY/jM/jD').format('YYYY-M-D');
          this.date.splice(1, 1, newValue);
        }
      }
    },
    gregorianToJalali(value : string) {
      return moment(value, 'jYYYY/jM/jD').format('YYYY-M-D');
    },
  },
});
