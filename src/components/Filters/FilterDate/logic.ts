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

  startOfWeek = moment().startOf('week').format('jYYYY-jM-jD');

  endOfWeek = moment().endOf('week').format('jYYYY-jM-jD');

  @Watch('date')
  watchDate(): string {
    switch (this.date) {
    case 'TODAY':
      this.$emit('input', moment().format('jYYYY-jM-jD'));
      break;
    case 'CURRENT_WEEK':
      this.$emit('input', [this.startOfWeek, this.endOfWeek]);
      break;
    case 'OPTIONAL_PERIOD':
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
    { id: 1, text: date.TODAY, value: 'TODAY' },
    { id: 2, text: date.CURRENT_WEEK, value: 'CURRENT_WEEK' },
    { id: 3, text: date.OPTIONAL_PERIOD, value: 'OPTIONAL_PERIOD' },
  ]

  range = []

  date = ''

  created() :void{
    const week = [this.startOfWeek, this.endOfWeek];
    if (this.model) {
      if (typeof this.model === 'string') {
        this.date = 'TODAY';
      // this.$emit('input', 'TODAY');
      } else if (this.arraysEqual(this.model, week)) {
        this.date = 'CURRENT_WEEK';
      } else {
        this.date = 'OPTIONAL_PERIOD';
      }
    }

    // console.log(this.model);
    // console.log(this.arraysEqual(this.model, week));
  }

  arraysEqual(a1: DatePickerValue, a2: string[]):boolean {
    return JSON.stringify(a1) === JSON.stringify(a2);
  }

  mounted() {
    // if (typeof this.model === 'string') {
    //   console.log('strin');
    //   this.date = 'TODAY';
    //   // this.$emit('input', 'TODAY');
    // } else {
    //   this.date = 'CURRENT_WEEK';
    // }

    // console.log(this.date);
  }
}
