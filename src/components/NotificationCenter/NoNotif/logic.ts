import Vue from 'vue';

export default Vue.extend({
  name: 'NoNotif',
  props: {
    notifType: {
      type: String,
      default: 'اعلانی',
    },
  },
});
