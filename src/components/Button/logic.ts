import Vue from 'vue';
import BaseIcon from '../BaseIcon/index.vue';

export default Vue.extend({
  name: 'Button',
  components: { BaseIcon },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
