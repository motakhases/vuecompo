import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'InlineMessage',
  components: { Icon },
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'neutral',
    },
    description: {
      type: String,
      default: '',
    },
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    showAlertHandler() {
      this.show = false;
    },
  },
});
