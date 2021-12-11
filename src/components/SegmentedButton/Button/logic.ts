import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
