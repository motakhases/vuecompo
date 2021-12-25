import Vue from 'vue';

export default Vue.extend({
  name: 'GatewayStatus',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'active',
    },
  },
});
