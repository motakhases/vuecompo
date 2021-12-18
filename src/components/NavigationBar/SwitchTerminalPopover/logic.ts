import Vue from 'vue';
import Create from '../Create/index.vue';
import Overview from '../Overview/index.vue';
import SwitchTerminal from '../SwitchTerminal/index.vue';
import SwitchTerminalItem from '../SwitchTerminalItem/index.vue';

export default Vue.extend({
  name: 'SwitchTerminalPopover',

  components: {
    Create,
    Overview,
    SwitchTerminal,
    SwitchTerminalItem,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    terminals: {
      type: Array,
      default: () => [],
    },
  },
});
