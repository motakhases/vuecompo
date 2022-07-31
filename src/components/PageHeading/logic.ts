import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import { PageHeadingStatus } from '@/types';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import Status from '@/components/Status/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: {
    Icon,
    Status,
    Button,
    Loading,
  },
})
export default class PageHeading extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;

  @Prop({ type: String }) readonly desc?: string;

  @Prop({ type: Boolean, default: false }) readonly returnBtn!: boolean;

  @Prop({ type: Boolean, default: false }) readonly sticky!: boolean;

  @Prop({ type: Boolean, default: false }) readonly smallContainer!: boolean;

  @Prop({ type: Array }) readonly statuses?: PageHeadingStatus[];

  @Prop({ type: Function }) readonly returnFunction?: () => void

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Ref('pageHeading') readonly pageHeading!: HTMLElement;

  stickHeading = false;

  checkScrolling(): void {
    const distanceOfTop = this.pageHeading?.getBoundingClientRect()?.top;
    if (this.pageHeading) {
      if (distanceOfTop <= 56) {
        this.stickHeading = true;
      } else {
        this.stickHeading = false;
      }
    }
  }

  numberOfButtons() {
    if (this.$slots.buttons) {
      if (this.$slots.buttons.length > 1) {
        return 2;
      }
      return 1;
    }
    return 0;
  }

  mounted(): void {
    if (this.sticky) {
      document.addEventListener('scroll', this.checkScrolling);
    }
  }
}
