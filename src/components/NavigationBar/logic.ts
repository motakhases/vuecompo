import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'NavigationBar',
  components: { Icon },
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
  },
});
