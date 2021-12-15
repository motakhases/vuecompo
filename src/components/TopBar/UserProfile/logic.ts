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
  mounted() {
    document.documentElement.addEventListener('click', this.outsideClick, false);
  },
  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.outsideClick, false);
  },
  methods: {
    showPopoverHandler() {
      this.show = !this.show;
    },
    outsideClick(e:any) {
      // close popover on clicking outside
      if (!this.$el.contains(e.target)) {
        this.show = false;
      }
    },
  },
});
