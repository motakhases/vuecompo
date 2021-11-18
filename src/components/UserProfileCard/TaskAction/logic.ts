import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'TaskAction',
  components: { Icon },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
