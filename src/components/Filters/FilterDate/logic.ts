import Vue, { PropType } from 'vue';
import Dropdown from '@/components/Dropdown/index.vue';

export default Vue.extend({
  name: 'FilterDate',
  components: { Dropdown },
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
  },
  data() {
    return {
      options: [
        { id: 1, name: 'Barney' },
        { id: 2, name: 'Homer' },
        { id: 3, name: 'Apu' },
        { id: 4, name: 'Bart' },
        { id: 5, name: 'Flanders' },
      ],
    };
  },
});
