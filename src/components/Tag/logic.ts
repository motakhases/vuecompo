import Vue from 'vue';

export default Vue.extend({
  name: 'Tag',

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
