import Vue from 'vue';
import Icon from '../../Icon/index.vue';

export default Vue.extend({
  name: 'UserProfile',
  components: { Icon },
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopoverHandler() {
      this.show = !this.show;
    },
    focusoutHandler() {
      console.log('go');

      this.show = false;
    },
  },
});
