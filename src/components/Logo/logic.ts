import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'Logo',
  components: { Icon },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    name: {
      type: String,
      default: 'zarinpal',
    },
    type: {
      type: String,
      default: 'logo',
    },
    language: {
      type: String,
      default: 'fa',
    },
  },
});
