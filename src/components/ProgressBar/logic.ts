import { Component, Prop, Vue } from 'vue-property-decorator';

interface IDom{
  style?:any;
}
@Component
export default class ProgressBar extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: Boolean }) readonly percentText?: boolean

  @Prop({ type: String, default: 'thick' }) readonly size!: string

  @Prop({ type: String, required: true }) readonly percent!: string

  @Prop({ type: String, default: 'determinate' }) readonly type!: string

  beforeEnter(el: HTMLElement) {
    const element = el as HTMLElement;
    element.style.width = '0';
  }

  enter(el: HTMLElement) {
    const element = el as HTMLElement;
    element.style.width = `${this.percent}%`;
    element.style.transition = 'width 1s linear';
  }
}
