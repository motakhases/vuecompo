import Vue from 'vue';
import Avatar from '@/components/Avatar/index.vue';

export default Vue.extend({
  name: 'AvatarProgressBar',
  components: { Avatar },
  props: {
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'beginner',
    },
    percent: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
});
