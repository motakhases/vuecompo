import Vue from 'vue';
import FilterSample from '@/components/FilterSample/index.vue';

export default Vue.extend({
  name: 'BankCards',
  components: { FilterSample },
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
    rrn: {
      type: String,
      default: '',
    },
    defaultAccount: {
      type: Boolean,
      default: false,
    },
  },
});
