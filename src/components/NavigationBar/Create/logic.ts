import Vue from 'vue';

export default Vue.extend({
  name: 'Create',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
