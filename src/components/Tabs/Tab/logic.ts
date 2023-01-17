import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: Boolean, default: false }) warn!: boolean;

  isActive = true;

  warning: boolean = this.warn;
}
