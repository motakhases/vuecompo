import Vue from 'vue';
import Indicator from './Indicator/index.vue';

export default Vue.extend({
  name: 'Tooltip',
  components: { Indicator },
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
    position: {
      type: String,
      default: 'bottomLeft',
      required: true,
    },
    space: {
      type: String,
      default: 'smallSpace',
      required: true,
    },
    indicator: {
      type: Boolean,
      default: false,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      required: true,
    },
  },
});
