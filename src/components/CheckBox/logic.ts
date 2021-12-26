import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'CheckBox',

  props: {
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

  computed: {
    model: {
      get():string[] {
        return this.value;
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },
});
