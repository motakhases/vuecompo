import Vue, { PropType } from 'vue';
import moment from 'moment-jalaali';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';
import DatePicker from '@/components/DatePicker/index.vue';

declare interface Option {
  id: number;
  name: string;
}

const date = {
  TODAY: 'امروز',
  CURRENT_WEEK: 'هفته جاری',
  OPTIONAL_PERIOD: 'بازه دلخواه',
};
export default Vue.extend({
  name: 'FilterDate',
  components: { Dropdown, Textfield, DatePicker },
  props: {
    value: {
      type: [String, Array] as PropType<string[] | string>,
      default: '',
    },
  },
  data(): {
    options: Array<Option>;
    date: string;
    } {
    return {
      options: [
        { id: 1, name: date.TODAY },
        { id: 2, name: date.CURRENT_WEEK },
        { id: 3, name: date.OPTIONAL_PERIOD },
      ],
      date: '',
    };
  },
  computed: {
    model: {
      get(): string | string[] {
        return this.value;
      },
      set(value: string[]): void {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    date() {
      const startOfWeek = moment().startOf('week').format('jYYYY/jM/jD');
      const endOfWeek = moment().endOf('week').format('jYYYY/jM/jD');

      console.log({
        startOfWeek,
        endOfWeek,
      });

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
    },
  },
});
