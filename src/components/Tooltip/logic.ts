import { Component, Prop, Vue } from 'vue-property-decorator';
import Indicator from './Indicator/index.vue';

@Component({
  components: { Indicator },
})
export default class Tooltip extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: String, default: 'bottomLeft' }) readonly position!: string

  @Prop({ type: String, default: 'smallSpace' }) readonly space!: string

  @Prop({ type: Boolean, default: true }) readonly indicator!: boolean

  @Prop({ type: String, default: 'large' }) readonly size!: string
}
