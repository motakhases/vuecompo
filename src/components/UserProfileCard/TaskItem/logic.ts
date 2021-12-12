import Vue from 'vue';
import CheckMark from '../CheckMark/index.vue';
import TaskAction from '../TaskAction/index.vue';

export default Vue.extend({
  name: 'TaskItem',
  components: { CheckMark, TaskAction },
  props: {
    link: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    before: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
});
