import Vue from 'vue';
import TaskItem from '../TaskItem/index.vue';

export default Vue.extend({
  name: 'TasksStack',
  components: { TaskItem },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
