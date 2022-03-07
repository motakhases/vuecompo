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
export default class FilterAmount extends Vue {
  @VModel({ type: [String, Array] }) range!: string

  singleValue: AmountFilterValue = '';

  dataLoaded = false;

  typeValue = 'amount';

  get model(): AmountFilterValue {
    return this.singleValue;
  }

  set model(value: AmountFilterValue) {
    this.singleValue = value;
  }

  get amountType(): string {
    return this.typeValue;
  }

  set amountType(value: string) {
    // when dropdown value is changed delete the previous property
    this.$emit('deleteFilter', this.typeValue);
    this.typeValue = value;
    this.dataLoaded = true;
  }

  @Watch('singleValue')
  watchSingleValue(): void{
    this.$emit('updateFilter', { [this.amountType]: this.singleValue });
  }

  @Watch('amountType')
  watchAmountType(): void {
    // after dropdown data loaded if it is changed reset the value
    if (this.dataLoaded) {
      this.$emit('updateFilter', {});
      if (this.amountType === 'range_amount') {
        this.singleValue = [];
      } else {
        this.singleValue = '';
      }
    }
  }

  created(): void {
    const amountList = ['min_amount', 'range_amount', 'max_amount', 'amount'];
    // update value based on query
    Object.keys(this.$route.query).forEach((key) => {
      if (amountList.includes(key)) {
        this.singleValue = this.$route.query[key];
        this.typeValue = key;
      }
    });
  }

  types = {
    EQUAL_TO: 'amount',
    GREATER_THAN: 'min_amount',
    PRICE_RANGE: 'range_amount',
    LESS_THAN: 'max_amount',
  };

  options = [
    { id: 1, text: 'برابراست با', value: this.types.EQUAL_TO },
    { id: 2, text: 'کوچک‌تراز', value: this.types.LESS_THAN },
    { id: 3, text: 'بازه مبلغ', value: this.types.PRICE_RANGE },
    { id: 4, text: 'بزرگ‌تراز', value: this.types.GREATER_THAN },
  ];
}
