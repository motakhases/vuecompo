import { Component, Watch, Vue } from 'vue-property-decorator';
import moment from 'moment-jalaali';
import Select from '@/components/Select/index.vue';
import Textfield from '@/components/TextField/index.vue';
import DatePicker from '@/components/DatePicker/index.vue';
import DataSheet from '@/components/DataSheet/index.vue';
import DataSheetRow from '@/components/DataSheet/Row/index.vue';
import DataSheetItem from '@/components/DataSheet/Item/index.vue';
import { DatePickerValue, Translation } from '@/types';

@Component({
  components: {
    Select,
    Textfield,
    DatePicker,
    DataSheet,
    DataSheetRow,
    DataSheetItem,
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

  shownValue: Translation = '';

  today = moment().format('jYYYY/jM/jD');

  startOfWeek = moment().startOf('week').format('jYYYY/jM/jD');

  endOfWeek = moment().endOf('week').format('jYYYY/jM/jD');

  startOfMonth = moment().startOf('jMonth').format('jYYYY/jM/jD');

  endOfMonth = moment().endOf('jMonth').format('jYYYY/jM/jD');

  lastMonth = moment().subtract(1, 'jMonth').format('jYYYY/jM/jD');

  lastWeek = moment().subtract(1, 'week').format('jYYYY/jM/jD');

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

  getDateValue(option: string) {
    const filteredList = this.options.filter((i) => i.value === option);
    return filteredList ? filteredList[0].text : '';
  }

  @Watch('date')
  watchDate(): string {
    switch (this.date) {
    case 'TODAY':
      this.value = this.today;
      this.shownValue = this.getDateValue(this.date);
      break;
    case 'CURRENT_WEEK':
      this.value = [this.startOfWeek, this.endOfWeek];
      this.shownValue = this.getDateValue(this.date);
      break;
    case 'CURRENT_MONTH':
      this.value = [this.startOfMonth, this.endOfMonth];
      this.shownValue = this.getDateValue(this.date);
      break;
    case 'LAST_MONTH':
      this.value = [this.lastMonth, this.today];
      this.shownValue = this.getDateValue(this.date);
      break;
    case 'LAST_WEEK':
      this.value = [this.lastWeek, this.today];
      this.shownValue = this.getDateValue(this.date);
      break;
    case 'OPTIONAL_PERIOD':
      this.shownValue = '';
      break;
    default:
      return '';
    }
    this.$emit('updatedValue', this.shownValue);

    return '';
  }

  @Watch('value')
  watchValue(): void {
    /**
     * add property to filter
     */
    this.$emit('updateFilter', { date: this.value });
  }

  updateInfo() {
    const dateQuery = this.$route?.query.date;
    if (dateQuery !== undefined) {
      const dateValue = moment(dateQuery as string).format('jYYYY/jM/jD');
      if (typeof dateQuery === 'string') {
        this.value = JSON.parse(JSON.stringify(dateQuery));
        if (dateValue === this.today) {
          this.date = 'TODAY';
        } else {
          this.date = dateValue;
        }
      } else {
        const firstDate = moment(dateQuery[0] as string).format('jYYYY/jM/jD');
        const secondDate = moment(dateQuery[1] as string).format('jYYYY/jM/jD');
        const firstFormattedValue = moment(dateQuery[0] as string).format('jYYYY-jM-jD');
        const secondFormattedValue = moment(dateQuery[1] as string).format('jYYYY-jM-jD');
        this.value = [firstFormattedValue, secondFormattedValue];
        if (firstDate === this.startOfWeek && secondDate === this.endOfWeek) {
          this.date = 'CURRENT_WEEK';
        } else if (firstDate === this.startOfMonth && secondDate === this.endOfMonth) {
          this.date = 'CURRENT_MONTH';
        } else if (firstDate === this.lastMonth && secondDate === this.today) {
          this.date = 'LAST_MONTH';
        } else if (firstDate === this.lastWeek && secondDate === this.today) {
          this.date = 'LAST_WEEK';
        } else {
          this.date = 'OPTIONAL_PERIOD';
        }
      }
    } else {
      this.date = '';
    }
  }

  mounted(): void {
    this.updateInfo();
  }

  /**
   * Watcher
   * ------------------------------
   * */
  @Watch('$route.query')
  refresh() {
    this.updateInfo();
  }
}
