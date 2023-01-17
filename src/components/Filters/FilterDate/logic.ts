import { Component, Watch, Vue } from 'vue-property-decorator';
import moment from 'moment-jalaali';
import Select from '@/components/Select/index.vue';
import Textfield from '@/components/TextField/index.vue';
import DatePicker from '@/components/DatePicker/index.vue';
import { DatePickerValue } from '@/types';

@Component({
  components: {
    Select,
    Textfield,
    DatePicker,
  },
})
export default class FilterDate extends Vue {
  date = '';

  dateList = {
    TODAY: this.$i18n.t('common.export.today'),
    CURRENT_WEEK: this.$i18n.t('common.export.current_week'),
    CURRENT_MONTH: this.$i18n.t('common.export.current_month'),
    LAST_MONTH: this.$i18n.t('common.export.prev_month'),
    LAST_WEEK: this.$i18n.t('common.export.7_days'),
    OPTIONAL_PERIOD: this.$i18n.t('common.export.range'),
  };

  value: DatePickerValue = '';

  today = moment().format('jYYYY-jM-jD');

  startOfWeek = moment().startOf('week').format('jYYYY-jM-jD');

  endOfWeek = moment().endOf('week').format('jYYYY-jM-jD');

  startOfMonth = moment().startOf('jMonth').format('jYYYY-jM-jD');

  endOfMonth = moment().endOf('jMonth').format('jYYYY-jM-jD');

  lastMonth = moment().subtract(1, 'jMonth').format('jYYYY-jM-jD');

  lastWeek = moment().subtract(1, 'week').format('jYYYY-jM-jD');

  options = [
    { id: 1, text: this.dateList.TODAY, value: 'TODAY' },
    { id: 2, text: this.dateList.CURRENT_WEEK, value: 'CURRENT_WEEK' },
    { id: 3, text: this.dateList.CURRENT_MONTH, value: 'CURRENT_MONTH' },
    { id: 4, text: this.dateList.LAST_MONTH, value: 'LAST_MONTH' },
    { id: 5, text: this.dateList.LAST_WEEK, value: 'LAST_WEEK' },
    { id: 6, text: this.dateList.OPTIONAL_PERIOD, value: 'OPTIONAL_PERIOD' },
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
    case 'CURRENT_MONTH':
      this.value = [this.startOfMonth, this.endOfMonth];
      break;
    case 'LAST_MONTH':
      this.value = [this.lastMonth, this.today];
      break;
    case 'LAST_WEEK':
      this.value = [this.lastWeek, this.today];
      break;
    default:
      return '';
    }
    return '';
  }

  @Watch('value')
  watchValue(): void {
    /**
     * add property to filter
     */
    this.$emit('updateFilter', { date: this.value });
  }

  mounted(): void {
    /**
     * update value based on query
     */
    if (Object.keys(this.$route.query).includes('date')) {
      this.date = 'OPTIONAL_PERIOD';
      this.value = JSON.parse(JSON.stringify(this.$route.query.date));

      if (typeof this.value === 'string') {
        const formattedValue = moment(this.value).format('jYYYY-jM-jD');
        this.value = [formattedValue, formattedValue];
      } else {
        const firstFormattedValue = moment(this.value[0]).format('jYYYY-jM-jD');
        const secondFormattedValue = moment(this.value[1]).format('jYYYY-jM-jD');
        this.value = [firstFormattedValue, secondFormattedValue];
      }
    }
  }
}
