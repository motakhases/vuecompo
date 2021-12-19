import Vue, { PropType } from 'vue';
import FilterToggle from '../FilterToggle/index.vue';

export default Vue.extend({
  name: 'FilterAccordion',
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
      type: Array as PropType<string[]>,
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

  computed: {
    model: {
      get(): string[] {
        return this.value;
      },
      set(value: string[]): void {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    check() {
      this.isActive = !this.isActive;
    },
    toggleHandler() {
      this.isActive = !this.isActive;
    },
    startTransition(el: HTMLElement) {
      const element = el;
      element.style.height = `${el.scrollHeight}px`;
    },

    endTransition(el: HTMLElement) {
      const element = el;
      element.style.height = '';
    },
  },
});
