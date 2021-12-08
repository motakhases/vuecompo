import Vue from 'vue';
import Dropdown from '@/components/Dropdown/index.vue';
import TextField from '@/components/TextField/index.vue';

export default Vue.extend({
  name: 'FilterAmount',
  components: { Dropdown, TextField },
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
  data() {
    return {
      options: [
        { id: 1, name: 'date.TODAY' },
        { id: 2, name: 'date.CURRENT_WEEK' },
        { id: 3, name: 'date.OPTIONAL_PERIOD' },
      ],
      value: '',
      selectedType: 'ew',
    };
  },
});
