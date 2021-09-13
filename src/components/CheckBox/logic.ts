import Vue from 'vue';

export default Vue.extend({
  name: 'CheckBox',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
});
