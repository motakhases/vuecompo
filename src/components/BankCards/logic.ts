import Vue from 'vue';
import FilterSample from '@/components/FilterSample/index.vue';
import Icon from '@/components/Icon/index.vue';

export default Vue.extend({
  name: 'BankCards',
  components: { FilterSample, Icon },
  props: {
    bankName: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: null,
    },
    iban: {
      type: String,
      default: '',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
});
