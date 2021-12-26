import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'Modal',
  components: { Icon, Button },
  props: {
    title: {
      type: String,
      default: '',
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    toggle: {
      type: Function,
      default: () => Function,
    },
  },
});
