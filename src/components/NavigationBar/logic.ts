import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'NavigationBar',
  components: { Icon },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    beforeIcon: {
      type: String,
      default: '',
    },
    afterIcon: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      required: true,
    },
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
