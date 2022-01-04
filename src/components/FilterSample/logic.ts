import Vue from 'vue';
import '@/utils/filters/index';
import moment from 'moment-jalaali';

export default Vue.extend({
  name: 'FilterSample',
  props: {
    text: {
      type: String,
      default: '',
    },
    limitation: {
      type: Boolean,
      default: false,
    },
    time: {
      type: String,
      default: '',
    },
    numberFormat: {
      type: Boolean,
      default: false,
    },
    customDate: {
      type: Boolean,
      default: false,
    },
    number: {
      type: String,
      default: '',

    },
  },
  data() {
    return {
      yesterday: moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
      tomarrow: moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
    };
  },
});
