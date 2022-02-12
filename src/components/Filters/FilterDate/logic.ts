import {
  Component, Watch, VModel, Vue,
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
  @VModel({ type: [String, Array] }) model!: DatePickerValue

  @Watch('date')
  watchDate(): string {
    const startOfWeek = moment().startOf('week').format('jYYYY/jM/jD');
    const endOfWeek = moment().endOf('week').format('jYYYY/jM/jD');

    switch (this.date) {
    case date.TODAY:
      this.$emit('input', moment().format('jYYYY/jM/jD'));
      break;
    case date.CURRENT_WEEK:
      this.$emit('input', [startOfWeek, endOfWeek]);
      break;
    case date.OPTIONAL_PERIOD:
      this.$emit('input', '');
      break;
    default:
      return '';
    }
    return '';
  }

  @Watch('range')
  watchRange():void{
    if (this.range.length) {
      this.$emit('input', this.range);
    }
  }

  options = [
    { id: 1, text: date.TODAY, value: date.TODAY },
    { id: 2, text: date.CURRENT_WEEK, value: date.CURRENT_WEEK },
    { id: 3, text: date.OPTIONAL_PERIOD, value: date.OPTIONAL_PERIOD },
  ]

  range = []

  date = ''
}
