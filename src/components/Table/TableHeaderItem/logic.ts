import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'TableHeaderItem',
  components: { Icon },
  props: {
    arrowUp: {
      type: Boolean,
      default: false,
    },
    arrowDown: {
      type: Boolean,
      default: false,
    },
  },
});
