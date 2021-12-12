import Vue from 'vue';
import Icon from '../Icon/index.vue';

export default Vue.extend({
  name: 'Modal',
  components: { Icon },
  props: {
    title: {
      type: String,
      default: 'عنوان',
    },
  },
  methods: {
    close():void {
      this.$emit('close');
    },
  },
});
