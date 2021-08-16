import Vue from 'vue';

export default Vue.extend({
  name: 'Button',

  props: {
    size: {
      type: String,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
