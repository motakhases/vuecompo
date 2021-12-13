import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'InlineMessage',
  components: { Icon },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'neutral',
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
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
});
