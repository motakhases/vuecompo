import Vue from 'vue';

export default Vue.extend({
  name: 'Button',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
