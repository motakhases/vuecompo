import Vue from 'vue';

export default Vue.extend({
  name: 'Lable',
  props: {
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'positive',
    },
  },
});
