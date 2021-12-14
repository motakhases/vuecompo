import Vue from 'vue';

export default Vue.extend({
  name: 'TableHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
});
