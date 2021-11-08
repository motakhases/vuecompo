import Vue from 'vue';
import NavBadge from '../../NavBadge/index.vue';
import Icon from '../../Icon/index.vue';
import Tooltip from '../../Tooltip/index.vue';

export default Vue.extend({
  name: 'NavItem',
  components: { NavBadge, Icon, Tooltip },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    badge: {
      type: String,
      default: '',
    },
  },
});
