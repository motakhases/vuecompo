import Vue, { PropOptions } from 'vue';
import Dropdown from '@/components/Dropdown/index.vue';

const date = {
  TODAY: 'امروز',
  CURRENT_WEEK: 'هفته جاری',
  OPTIONAL_PERIOD: 'بازه دلخواه',
};
export default Vue.extend({
  name: 'FilterDate',
  components: { Dropdown },
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data():{
    options:Array<any>;
    value:string;
    selectedType:string
    } {
    return {
      options: [
        { id: 1, name: date.TODAY },
        { id: 2, name: date.CURRENT_WEEK },
        { id: 3, name: date.OPTIONAL_PERIOD },
      ],
      value: '',
      selectedType: '',
    };
  },
  computed: {
    test() {
      if (this.value === date.TODAY) {
        return this.selectedType === 'today';
      }
      return 'erte';
    },
  },
  watch: {
    value() {
      switch (this.value) {
      case date.TODAY:
        this.selectedType = date.TODAY;
        break;
      case date.CURRENT_WEEK:
        this.selectedType = date.CURRENT_WEEK;
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
