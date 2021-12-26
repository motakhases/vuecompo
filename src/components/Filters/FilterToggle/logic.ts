import Vue, { PropType } from 'vue';
import CheckBox from '@/components/CheckBox/index.vue';

export default Vue.extend({
  name: 'FilterToggle',
  components: { CheckBox },
  props: {
    val: {
      type: String,
      default: '',
    },
    value: {
      type: Array as PropType<string[]>,
      default: '',
    },
    name: {
      type: String,
      default: '',
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

  computed: {
    model: {
      get():string|string[] {
        return this.value;
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },
});
