import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'UserProfile',
  components: { Icon },
  props: {
    username: {
      type: String,
      default: '',
    },
  },
});
