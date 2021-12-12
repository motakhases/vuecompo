import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  components: { Icon },
  props: {
    items: {
      type: Array,
      required: true,
    },
    iconName: {
      type: String,
      default: '',
    },
    negative: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(val:any) {
      this.$emit('select', val);
    },
  },
});
