import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'AvatarProgressBar',
  components: { Icon },
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

    percent: {
      type: Number,
      default: 50,
    },

  },
});
