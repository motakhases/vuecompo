import { Component, Watch, Vue } from 'vue-property-decorator';
import moment from 'moment-jalaali';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';
import DatePicker from '@/components/DatePicker/index.vue';
import { DatePickerValue } from '@/types';

const date = {
  TODAY: 'امروز',
  CURRENT_WEEK: 'هفته جاری',
  OPTIONAL_PERIOD: 'بازه دلخواه',
};

@Component({
  components: {
    Dropdown,
    Textfield,
    DatePicker,
  },
})
export default class FilterDate extends Vue {
  date = '';

  value: DatePickerValue = '';

  today = moment().format('jYYYY-jM-jD');

  startOfWeek = moment().startOf('week').format('jYYYY-jM-jD');

  endOfWeek = moment().endOf('week').format('jYYYY-jM-jD');

  options = [
    { id: 1, text: date.TODAY, value: 'TODAY' },
    { id: 2, text: date.CURRENT_WEEK, value: 'CURRENT_WEEK' },
    { id: 3, text: date.OPTIONAL_PERIOD, value: 'OPTIONAL_PERIOD' },
  ];

  get model(): DatePickerValue {
    return this.value;
  }

  set model(value: DatePickerValue) {
    this.value = value;
  }

  @Watch('date')
  watchDate(): string {
    switch (this.date) {
    case 'TODAY':
      this.value = this.today;
      break;
    case 'CURRENT_WEEK':
      this.value = [this.startOfWeek, this.endOfWeek];
      break;
    default:
      return '';
    }
    return '';
  }

  @Watch('value')
  watchValue(): void {
    // add property to filter
    this.$emit('updateFilter', { date: this.value });
  }

  mounted(): void {
    // update value based on query
    if (Object.keys(this.$route.query).includes('date')) {
      this.date = 'OPTIONAL_PERIOD';
      this.value = JSON.parse(JSON.stringify(this.$route.query.date));
      if (typeof this.value === 'string') {
        this.value = [this.value, this.value];
      }
    }
  }
}
