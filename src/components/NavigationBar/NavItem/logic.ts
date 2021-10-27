import Vue from 'vue';

export default Vue.extend({
  name: 'NavItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
