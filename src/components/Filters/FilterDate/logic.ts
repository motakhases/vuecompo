import {
  Component, Watch, VModel, Vue, Prop,
} from 'vue-property-decorator';
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
  // @VModel({ type: [String, Array] }) model!: DatePickerValue

  // @Prop({ type: [String, Array], required: true }) readonly value!: string
  date = ''

value:DatePickerValue=''

get model(): DatePickerValue {
  return this.value;
}

set model(value: DatePickerValue) {
  this.value = value;
}

today=moment().format('jYYYY-jM-jD')

  startOfWeek = moment().startOf('week').format('jYYYY-jM-jD');

  endOfWeek = moment().endOf('week').format('jYYYY-jM-jD');

  @Watch('date')
  watchDate(): string {
    switch (this.date) {
    case 'TODAY':
      this.value = this.today;
      break;
    case 'CURRENT_WEEK':
      this.value = [this.startOfWeek, this.endOfWeek];
      break;
    case 'OPTIONAL_PERIOD':
      // this.$emit('input', this.value ? this.value : []);
      break;
    default:
      return '';
    }
    return '';
  }

  @Watch('value')
  watchValue(): void{
    this.$emit('updateFilter', { date: this.value });
  }

  options = [
    { id: 1, text: date.TODAY, value: 'TODAY' },
    { id: 2, text: date.CURRENT_WEEK, value: 'CURRENT_WEEK' },
    { id: 3, text: date.OPTIONAL_PERIOD, value: 'OPTIONAL_PERIOD' },
  ]

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

  arraysEqual(a1: DatePickerValue, a2: string[]):boolean {
    return JSON.stringify(a1) === JSON.stringify(a2);
  }
}
