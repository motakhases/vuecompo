import { Component, Vue, Watch } from 'vue-property-decorator';
import Select from '@/components/Select/index.vue';
import Textfield from '@/components/TextField/index.vue';
import { AmountFilterValue, Translation } from '@/types';

@Component({
  components: {
    Select,
    Textfield,
  },
})
export default class FilterAmount extends Vue {
  value: AmountFilterValue = '';

  dataLoaded = false;

  typeValue = 'amount';

  shownValue: Translation = '';

  types = {
    EQUAL_TO: 'amount',
    GREATER_THAN: 'min_amount',
    PRICE_RANGE: 'range_amount',
    LESS_THAN: 'max_amount',
  };

  options = [
    { id: 1, text: this.$i18n.t('common.export.amount'), value: this.types.EQUAL_TO },
    { id: 2, text: this.$i18n.t('common.export.max_amount'), value: this.types.LESS_THAN },
    { id: 3, text: this.$i18n.t('common.export.amount_range'), value: this.types.PRICE_RANGE },
    { id: 4, text: this.$i18n.t('common.export.min_amount'), value: this.types.GREATER_THAN },
  ];

  getDateValue(option: string) {
    const filteredList = this.options.filter((i) => i.value === option);
    return filteredList ? filteredList[0].text : '';
  }

  get model(): AmountFilterValue {
    return this.value;
  }

  set model(value: AmountFilterValue) {
    this.value = value;
  }

  get amountType(): string {
    return this.typeValue;
  }

  set amountType(value: string) {
    if (value === 'range_amount') {
      this.shownValue = '';
    } else {
      this.shownValue = this.getDateValue(value);
    }
    // when dropdown value is changed delete the previous property
    this.$emit('deleteFilter', this.typeValue);
    this.$emit('updatedValue', this.shownValue);
    this.typeValue = value;
    this.dataLoaded = true;
  }

  @Watch('value')
  watchValue(): void {
    this.$emit('updateFilter', { [this.amountType]: this.value });
  }

  @Watch('amountType')
  watchAmountType(): void {
    // after dropdown data loaded if it is changed reset the value
    if (this.dataLoaded) {
      this.$emit('updateFilter', {});
      if (this.amountType === 'range_amount') {
        this.value = [];
      } else {
        this.value = '';
      }
    }
  }

  created(): void {
    const amountList = ['min_amount', 'range_amount', 'max_amount', 'amount'];
    // update value based on query
    Object.keys(this.$route.query).forEach((key) => {
      if (amountList.includes(key)) {
        this.value = JSON.parse(JSON.stringify(this.$route.query[key]));
        this.typeValue = key;
      }
    });
  }

  mounted() {
    this.$emit('updateFilter', { [this.amountType]: this.value });
  }
}
