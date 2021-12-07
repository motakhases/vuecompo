import Vue from 'vue';

export default Vue.extend({
  name: 'FilterStatus',
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
});
