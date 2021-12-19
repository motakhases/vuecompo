import Vue from 'vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';

const amount = {
  EQUAL_TO: 'برابراست با',
  GREATER_THAN: 'بزرگ‌تراز',
  PRICE_RANGE: 'بازه مبلغ',
  LESS_THAN: 'کوچک‌تراز',
};

export default Vue.extend({
  name: 'FilterAmount',
  components: { Dropdown, Textfield },
  props: {
    value: {
      type: String,
      default: '',
    },
    amountFilter: {
      type: String,
      default: 'equal',
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
      amount,
      amountType: '',
    };
  },
  computed: {
    model: {
      get():string | string[] {
        return this.value;
      },
      set(value:string[]):void {
        console.log(value);

        this.$emit('input', value);
      },
    },
  },
  watch: {
    amountFilter() {
      switch (this.amountFilter) {
      case 'equal':
        this.amountType = amount.EQUAL_TO;
        break;
      case 'max':
        this.amountType = amount.LESS_THAN;
        break;
      case 'min':
        this.amountType = amount.GREATER_THAN;
        break;
      case 'range':
        this.amountType = amount.PRICE_RANGE;
        break;
      default:
        return '';
      }
      return '';
    },
  },
});
