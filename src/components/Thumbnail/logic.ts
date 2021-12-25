import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';

export default Vue.extend({
  name: 'Thumbnail',
  components: { Icon, BankLogos },
  props: {
    icon: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
});
