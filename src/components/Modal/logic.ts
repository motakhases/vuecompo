import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'Modal',
  components: { Icon },
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
  methods: {
    outsideClick() {
      // close modal
      this.toggle();
    },
  },
});
