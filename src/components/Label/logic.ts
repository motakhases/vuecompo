import Vue from 'vue';

export default Vue.extend({
  name: 'Label',
  props: {
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'positive',
    },
    text: {
      type: String,
      default: '',
    },
  },
});
