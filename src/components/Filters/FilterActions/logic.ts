import Vue from 'vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'FilterActions',
  components: { Button },
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
    fill: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    beforeIcon: {
      type: String,
      default: '',
    },
    afterIcon: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
