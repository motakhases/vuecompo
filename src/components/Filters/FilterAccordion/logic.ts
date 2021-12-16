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
    val: {
      type: String,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    change: {
      type: Function,
      default: () => 1,
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
    startTransition(el:any) {
      const element = el;
      element.style.height = `${el.scrollHeight}px`;
    },

    endTransition(el:any) {
      const element = el;
      element.style.height = '';
    },
  },
});
