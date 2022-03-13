import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: { Icon, Button },
})
export default class Modal extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;

  @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean;

  @Prop({ type: Function }) toggle!: () => boolean;

  @Prop({ type: Boolean }) closable!: boolean;

  @Prop({ type: String }) readonly width?: string;

  get finalWidth(): string {
    return `w-[${this.width}]`;
  }
}
