import Vue from 'vue';

export default Vue.extend({
  name: 'Table',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
});
