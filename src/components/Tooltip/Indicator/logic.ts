import Vue from 'vue';

export default Vue.extend({
  name: 'Indicator',
  props: {
    position: {
      type: String,
      default: 'bottomLeft',
      required: true,
    },
  },
});
