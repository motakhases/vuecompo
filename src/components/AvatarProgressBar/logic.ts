import Vue from 'vue';
import Avatar from '@/components/Avatar/index.vue';

export default Vue.extend({
  name: 'AvatarProgressBar',
  components: { Avatar },
  props: {
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
