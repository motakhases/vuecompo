import Vue from 'vue';
import FilterSample from '@/components/FilterSample/index.vue';
import BankLogos from '@/components/BankLogos/index.vue';

export default Vue.extend({
  name: 'BankCards',
  components: { FilterSample, BankLogos },
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
      type: String,
      default: '',
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
