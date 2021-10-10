import Vue from 'vue';

export default Vue.extend({
  name: 'Tab',

  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    warn: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: true,
    };
  },
});
