import Vue from 'vue';

export default Vue.extend({
  name: 'Status',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'neutral',
    },
    indicator: {
      type: Boolean,
      default: true,
    },
  },
});
