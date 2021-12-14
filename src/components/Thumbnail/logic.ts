import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'Thumbnail',
  components: { Icon },
  props: {
    icon: {
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
