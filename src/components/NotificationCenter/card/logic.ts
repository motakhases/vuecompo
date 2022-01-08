import Vue from 'vue';
import Link from '@/components/Link/index.vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'NotificationCard',
  components: { Link, Icon },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
});
