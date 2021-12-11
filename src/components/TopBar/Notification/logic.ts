import Vue from 'vue';
import Icon from '../../Icon/index.vue';
import NotificationBadge from '../../NotificationBadge/index.vue';

export default Vue.extend({
  name: 'Notification',
  components: { Icon, NotificationBadge },
  props: {
    badge: {
      type: String,
      default: '',
    },
  },
});
