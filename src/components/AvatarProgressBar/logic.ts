import Vue from 'vue';

export default Vue.extend({
  name: 'AvatarProgressBar',
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
      type: Number,
      default: 50,
    },
  },
});
