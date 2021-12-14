import Vue from 'vue';

export default Vue.extend({
  name: 'NotificationBadge',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
