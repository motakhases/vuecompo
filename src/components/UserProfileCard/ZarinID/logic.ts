import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'ZarinID',
  components: { Icon },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    level: {
      type: String,
      default: '',
    },
  },
});
