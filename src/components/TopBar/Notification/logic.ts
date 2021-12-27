import Vue from 'vue';
import Icon from '../../Icon/index.vue';
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'Notification',
  components: { Icon, NotificationBadge, Button },
  props: {
    badge: {
      type: String,
      default: '',
    },
  },
});
