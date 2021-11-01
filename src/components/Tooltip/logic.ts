import Vue from 'vue';
import Indicator from './Indicator/index.vue';

export default Vue.extend({
  name: 'Tooltip',
  components: { Indicator },
  props: {
    text: {
      type: String,
      default: 'tooltip',
      required: true,
    },
    position: {
      type: String,
      default: 'bottomLeft',
      required: true,
    },
  },
});
