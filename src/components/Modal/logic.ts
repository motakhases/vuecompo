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

  @Prop({ type: String }) readonly width!: string;

  finalWidth = ''

  onResize(): void {
    if (window.innerWidth >= 992) {
      this.finalWidth = this.width;
    } else {
      this.finalWidth = '';
    }
  }

  mounted(): void {
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
  }
}
