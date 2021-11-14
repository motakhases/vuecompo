import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'Avatar',
  components: { Icon },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    img: {
      type: String,
      default: '',
    },
  },
});
