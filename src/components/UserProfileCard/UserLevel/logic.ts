import Vue from 'vue';

export default Vue.extend({
  name: 'UserLevel',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
