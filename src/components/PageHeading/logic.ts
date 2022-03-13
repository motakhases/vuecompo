import { Component, Prop, Vue } from 'vue-property-decorator';
import { PageHeadingStatus } from '@/types';
import Icon from '../Icon/index.vue';
import Status from '../Status/index.vue';
import Button from '../Button/index.vue';

@Component({
  components: {
    Icon, Status, Button,
  },
})
export default class PageHeading extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string

  @Prop({ type: String }) readonly desc?: string

  @Prop({ type: Boolean, default: false }) readonly returnBtn!: boolean

  @Prop({ type: Boolean, default: false }) readonly sticky!: boolean

  @Prop({ type: Array }) readonly statuses?: PageHeadingStatus[]

  stickHeading = false

  checkScrolling(): void {
    const element = this.$refs.pageHeading as HTMLElement;
    const distanceOfTop = element.getBoundingClientRect().top;
    if (distanceOfTop <= 56) {
      this.stickHeading = true;
    } else {
      this.stickHeading = false;
    }
  }

  mounted(): void {
    if (this.sticky) {
      document.addEventListener('scroll', this.checkScrolling);
    }
  }
}
