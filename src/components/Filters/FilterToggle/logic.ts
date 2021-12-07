import Vue, { PropType } from 'vue';
import CheckBox from '@/components/CheckBox/index.vue';

export default Vue.extend({
  name: 'FilterToggle',
  components: { CheckBox },
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

});
