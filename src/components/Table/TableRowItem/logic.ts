import Vue from 'vue';

export default Vue.extend({
  name: 'TableRowItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    subText: {
      type: String,
      default: '',
    },
  },
});
