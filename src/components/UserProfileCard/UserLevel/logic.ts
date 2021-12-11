import Vue from 'vue';
import Label from '@/components/Label/index.vue';

export default Vue.extend({
  name: 'UserLevel',
  components: { Label },
  props: {
    text: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
});
