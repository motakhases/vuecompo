import Vue from 'vue';
import JdateName from '@/filters/JdateName';
import Link from '@/components/Link/index.vue';

export default Vue.extend({
  name: 'NotificationCard',
  components: { Link },
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
