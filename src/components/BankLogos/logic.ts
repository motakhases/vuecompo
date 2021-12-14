import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'BankCards',
  components: { Icon },
  props: {
    logo: {
      type: String,
      default: '',
    },
  },
});
