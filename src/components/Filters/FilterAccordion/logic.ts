import Vue from 'vue';
import FilterToggle from '../FilterToggle/index.vue';

export default Vue.extend({
  name: 'FilterStatus',
  components: { FilterToggle },
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    check() {
      this.isActive = !this.isActive;
    },
    toggleHandler() {
      this.isActive = !this.isActive;
    },
    startTransition(el) {
      const element = el;
      element.style.height = `${el.scrollHeight}px`;
    },

    endTransition(el) {
      const element = el;
      element.style.height = '';
    },
  },
});
