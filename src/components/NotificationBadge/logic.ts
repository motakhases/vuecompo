import Vue from 'vue';

export default Vue.extend({
  name: 'NotificationBadge',
  props: {
    numeric: {
      type: Boolean,
      default: true,
    },
  },
});
