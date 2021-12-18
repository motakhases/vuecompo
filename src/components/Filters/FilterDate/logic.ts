import Vue from 'vue';
import moment from 'moment-jalaali';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';

const date = {
  TODAY: 'امروز',
  CURRENT_WEEK: 'هفته جاری',
  OPTIONAL_PERIOD: 'بازه دلخواه',
};
export default Vue.extend({
  name: 'FilterDate',
  components: { Dropdown, Textfield },
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data(): {
    options: Array<any>;
    value: string;
    selectedType: string;
    todayDate: string;
    weekDate: any;
    finalDate: any;
    } {
    return {
      options: [
        { id: 1, name: date.TODAY },
        { id: 2, name: date.CURRENT_WEEK },
        { id: 3, name: date.OPTIONAL_PERIOD },
      ],
      value: '',
      selectedType: '',
      todayDate: moment().format('jYYYY/jM/jD'),
      weekDate: moment().startOf('week').format('jYYYY/jM/jD'),
      finalDate: this.date,
    };
  },
  computed: {
    model: {
      get():string {
        return this.date;
      },
      set(value:string[]):void {
        console.log('me');

        this.$emit('input', 'value');
      },
    },
  },
  watch: {
    value() {
      const startOfWeek = moment().startOf('week').format('jYYYY/jM/jD');
      const endOfWeek = moment().endOf('week').format('jYYYY/jM/jD');

      switch (this.value) {
      case date.TODAY:
        this.selectedType = date.TODAY;
        this.finalDate = moment().format('jYYYY/jM/jD');
        this.$emit('date', this.finalDate);
        break;
      case date.CURRENT_WEEK:
        this.selectedType = date.CURRENT_WEEK;
        this.finalDate = [startOfWeek, endOfWeek];
        this.$emit('date', this.finalDate);

        break;
      case date.OPTIONAL_PERIOD:
        this.selectedType = date.OPTIONAL_PERIOD;
        break;
      default:
        return '';
      }
      return '';
    },
  },
});
