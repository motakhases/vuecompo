import { Component, Prop, Vue } from 'vue-property-decorator';
import { UserTaskItems } from '@/types';
import TaskItem from '../TaskItem/index.vue';

@Component({
  components: { TaskItem },
})
export default class TasksStack extends Vue {
  @Prop({ type: Array }) readonly items!: UserTaskItems[];
}
