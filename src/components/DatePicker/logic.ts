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
        // if (this.date.length) {
        //   const [firstDate, secondDate] = this.date;
        //   this.to = secondDate;
        // }
        return this.to;
        // if (this.date.length) {
        //   const [firstDate, secondDate] = this.date;
        //   return secondDate;
        // }
        // return '';
      },
      set(val) {
        this.to = val;
      },
    },
  },
  watch: {
    date() {
      const [firstDate, secondDate] = this.date;
      this.from = firstDate;
      this.to = secondDate;
    },
  },
  methods: {
    firstInputHandler(e) {
      this.date.splice(0, 1, this.from);
    },
    secondInputHandler(e) {
      this.date.splice(1, 1, this.to);
    },
  },
});
