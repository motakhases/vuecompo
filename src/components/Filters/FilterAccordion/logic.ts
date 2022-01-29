import {
  Component, Prop, VModel, Vue,
} from 'vue-property-decorator';
import FilterToggle from '../FilterToggle/index.vue';

@Component({
  components: {
    FilterToggle,
  },
})
export default class Logic extends Vue {
  @VModel({ type: Array }) model!: string[]

  @Prop({ type: String, default: 'large' }) readonly size!: string

  @Prop({ type: String, required: true }) readonly val!: string

  @Prop({ type: String, required: true }) readonly name!: string

  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Boolean }) readonly disabled?: boolean

  @Prop({ type: Function }) readonly change?: void

  isActive = false

  check(): void {
    this.isActive = !this.isActive;
  }

  toggleHandler(): void {
    this.isActive = !this.isActive;
  }

  startTransition(el: HTMLElement): void {
    const element = el;
    element.style.height = `${el.scrollHeight}px`;
  }

  endTransition(el: HTMLElement): void {
    const element = el;
    element.style.height = '';
  }
}
