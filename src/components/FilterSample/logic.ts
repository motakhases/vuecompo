import Vue from 'vue';
import '@/filters/index';

export default Vue.extend({
  name: 'FilterSample',
  props: {
    text: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',

    },
  },
});
