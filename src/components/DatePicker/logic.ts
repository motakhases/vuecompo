import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
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
    date: string | Array<string>;
    from: string;
    to: string;
    } {
    return {
      date: '',
      // from: this.date.length ? this.date[0] : fromInput,
      // to: date.length ? date[0] : fromInput,
      from: this.fromInput,
      to: this.toInput,
    };
  },
  computed: {
    finalData(): any {
      // format the value based on separator for type === number
      if (this.range) {
        return this.date === [];
      }
      return this.date === '';
    },
    // finalData(): any {
    //   get() {
    //     return this.range;
    //   },
    //   set() {
    //     this.date = this.range ? [] : '';
    //   },
    // },
  },
  watch: {
    date() {
      // this.from = 'chand';
      console.log('changing');
      const [firstDate, secondDate] = this.date;

      this.from = firstDate;
      this.to = secondDate;
      // const date = this as any;
      // return 'date.length ? date[0] : this.fromInput';
    },
  },
  methods: {
    focusOut(index: number, e: any) {
      console.log('focus out', e, index);
      // this.rangeData = this.rangeData.splice(1, 1, '2020/10/24');
      // this.date.splice(index, 1, e.target.value);
    },
  },
});
