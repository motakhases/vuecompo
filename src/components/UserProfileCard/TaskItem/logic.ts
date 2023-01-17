import { Component, Prop, Vue } from 'vue-property-decorator';
import CheckMark from '../CheckMark/index.vue';
import TaskAction from '../TaskAction/index.vue';

@Component({
  components: {
    CheckMark,
    TaskAction,
  },
})
export default class TaskItem extends Vue {
  @Prop({ type: String, required: true }) readonly link!: string;

  @Prop({ type: String, required: true }) readonly text!: string;

  @Prop({ type: Boolean, default: false }) readonly complete!: boolean;

  @Prop({ type: Boolean, default: false }) readonly before!: boolean;

  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
}
