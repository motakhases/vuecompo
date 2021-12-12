import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'TaskAction',
  components: { Icon },
  props: {
    link: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
});
