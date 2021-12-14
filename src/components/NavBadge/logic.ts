import Vue from 'vue';

export default Vue.extend({
  name: 'NavBadge',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
