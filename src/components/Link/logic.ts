import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

@Component
export default class Link extends Vue {
  @Prop({ type: String }) readonly href?: string

  @Prop({ type: String }) readonly target?: string

  @Prop({ type: String }) readonly to?: string

  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: Boolean, default: false }) readonly exact?: boolean

  get linkComponentDetector(): string {
    return this.href ? 'a' : 'a';
  }
}
