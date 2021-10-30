import Vue from 'vue';

export default Vue.extend({
  name: 'StoreStatus',
  props: {
    state: {
      type: String,
      default: 'active',
    },
  },
});
