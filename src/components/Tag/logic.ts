import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'Tag',
  components: { Icon },
  props: {
    label: {
      type: String,
      default: '',
    },
    btn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close():void {
      this.$emit('close');
    },
  },
});
