import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'NavigationBar',
  components: { Icon },
  props: {
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
  },
});
