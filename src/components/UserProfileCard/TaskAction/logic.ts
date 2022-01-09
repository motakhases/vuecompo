import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class TaskAction extends Vue {
  @Prop({ type: String, required: true }) readonly link!: string

  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean

  @Prop({ type: Boolean, default: false }) readonly complete!: boolean
}
