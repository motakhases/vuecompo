import Vue from 'vue';

export default Vue.extend({
  name: 'StoreStatus',
  props: {
    text: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: 'active',
    },
  },
});
