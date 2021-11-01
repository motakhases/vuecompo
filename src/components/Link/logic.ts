import Vue from 'vue';

export default Vue.extend({
  name: 'Link',
  props: {
    to: {
      type: String,
      default: '#',
    },
  },
});
