import Vue from 'vue';

export default Vue.extend({
  name: 'SwitchTerminalPopover',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
});
