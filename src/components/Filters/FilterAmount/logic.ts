import {
  Component, Prop, VModel, Watch, Vue,
} from 'vue-property-decorator';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';

@Component({
  components: {
    Dropdown,
    Textfield,
  },
})
export default class Logic extends Vue {
  @VModel({ type: Array }) model!: string[]

  @Prop({ type: String, default: 'equal' }) readonly amountFilter!: string

  @Watch('amountFilter')
  watchAmountFilter(): string {
    switch (this.amountFilter) {
    case 'equal':
      this.amountType = this.types.EQUAL_TO;
      break;
    case 'max':
      this.amountType = this.types.LESS_THAN;
      break;
    case 'min':
      this.amountType = this.types.GREATER_THAN;
      break;
    case 'range':
      this.amountType = this.types.PRICE_RANGE;
      break;
    default:
      return '';
    }
    return '';
  }

  types = {
    EQUAL_TO: 'برابراست با',
    GREATER_THAN: 'بزرگ‌تراز',
    PRICE_RANGE: 'بازه مبلغ',
    LESS_THAN: 'کوچک‌تراز',
  };

  options = [
    { id: 1, text: this.types.EQUAL_TO },
    { id: 2, text: this.types.LESS_THAN },
    { id: 3, text: this.types.PRICE_RANGE },
    { id: 4, text: this.types.GREATER_THAN },
  ]

  amount = null

  amountType = ''

  range = []
}
