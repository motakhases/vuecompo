import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'CheckMark',
  components: { Icon },
  props: {
    complete: {
      type: Boolean,
      default: false,
    },
  },
});
