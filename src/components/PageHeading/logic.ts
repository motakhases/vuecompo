import Vue from 'vue';
import Icon from '../Icon/index.vue';
import btn from '../Button/index.vue';

export default Vue.extend({
  name: 'PageHeading',
  components: { Icon, btn },
  props: {
    returnBTN: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    hasButton: {
      type: Boolean,
      default: false,
    },
    btn: {
      // set btn options like label , type , disable & etc
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      stickHeading: false,
    };
  },
  mounted() {
    if (this.sticky) {
      document.addEventListener('scroll', this.checkScrolling);
    }
  },
  methods: {
    checkScrolling() {
      const element = this.$refs.pageHeading as HTMLElement;
      const distanceOfTop = element.getBoundingClientRect().top;
      if (distanceOfTop <= 0) {
        this.stickHeading = true;
      } else if (window.scrollY === 0) {
        this.stickHeading = false;
      }
    },
    btnOperate() {
      this.$emit('btnClick');
    },
  },
});
