import Vue from 'vue';
import Dropdown from '@/components/Dropdown/index.vue';
import TextField from '@/components/TextField/index.vue';

const amount = {
  EQUAL_TO: 'برابراست با',
  GREATER_THAN: 'بزرگ‌تراز',
  PRICE_RANGE: 'بازه مبلغ',
  LESS_THAN: 'کوچک‌تراز',
};

export default Vue.extend({
  name: 'FilterAmount',
  components: { Dropdown, TextField },
  props: {
    size: {
      type: String,
      default: 'large',
    },
    amountValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      options: [
        { id: 1, name: amount.EQUAL_TO },
        { id: 2, name: amount.LESS_THAN },
        { id: 3, name: amount.PRICE_RANGE },
        { id: 4, name: amount.GREATER_THAN },
      ],
      value: '',
      selectedType: 'ew',
      amount,
    };
  },
});
