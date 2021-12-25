import Vue from 'vue';
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import NavItem from './NavItem/index.vue';
import SwitchTerminalPopover from './SwitchTerminalPopover/index.vue';

export default Vue.extend({
  name: 'NavigationBar',

  components: {
    Icon,
    Logo,
    NavItem,
    SwitchTerminalPopover,
  },

  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    terminals: {
      type: Array,
      default: () => [],
    },
    aboveLinks: {
      type: Array,
      required: true,
    },
    belowLinks: {
      type: Array,
      default: () => [],
    },
  },
});
