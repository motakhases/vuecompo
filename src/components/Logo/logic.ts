import Vue from 'vue';

export default Vue.extend({
  name: 'Logo',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    name: {
      type: String,
      default: 'zarinpal',
    },
    type: {
      type: String,
      default: 'logo',
    },
    language: {
      type: String,
      default: 'fa',
    },
  },
});
