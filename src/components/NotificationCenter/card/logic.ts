import Vue from 'vue';
import JdateName from '@/filters/JdateName';
import Link from '@/components/Link/index.vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'NotificationCard',
  components: { Link, Icon },
  filters: {
    JdateName,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
});
