import {
  Component, Prop, VModel, Vue, Watch,
} from 'vue-property-decorator';
import Dropdown from '@/components/Dropdown/index.vue';
import Textfield from '@/components/TextField/index.vue';
import { AmountFilterValue } from '@/types';

@Component({
  components: {
    Dropdown,
    Textfield,
  },
})
export default class Logic extends Vue {
  @VModel({ type: [Array, String], required: true }) model!: AmountFilterValue

  @Prop({ type: String, required: true }) readonly amountFilter!: string

  @Watch('amountType')
  watchAmountType(): string {
    this.$emit('input', '');
    this.range = [];

    switch (this.amountType) {
    case this.types.EQUAL_TO:
      this.$emit('updateAmount', this.types.EQUAL_TO);
      break;
    case this.types.LESS_THAN:
      this.$emit('updateAmount', this.types.LESS_THAN);
      break;
    case this.types.PRICE_RANGE:
      this.$emit('updateAmount', this.types.PRICE_RANGE);
      break;
    case this.types.GREATER_THAN:
      this.$emit('updateAmount', this.types.GREATER_THAN);
      break;
    default:
      return '';
    }
    return '';
  }

  @Watch('range')
  watchRange():void{
    if (this.range.length) {
      this.$emit('input', this.range);
    }
  }

  types = {
    EQUAL_TO: 'EQUAL_TO',
    GREATER_THAN: 'LESS_THAN',
    PRICE_RANGE: 'PRICE_RANGE',
    LESS_THAN: 'GREATER_THAN',
  };

  options = [
    { id: 1, text: 'برابراست با', value: this.types.EQUAL_TO },
    { id: 2, text: 'بزرگ‌تراز', value: this.types.LESS_THAN },
    { id: 3, text: 'بازه مبلغ', value: this.types.PRICE_RANGE },
    { id: 4, text: 'کوچک‌تراز', value: this.types.GREATER_THAN },
  ]

  range = []

  amountType = this.amountFilter
}
