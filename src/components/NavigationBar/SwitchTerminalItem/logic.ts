import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Components
import { Route } from 'vue-router';
import Icon from '../../Icon/index.vue';
import Thumbnail from '../../Thumbnail/index.vue';
import GatewayStatus from '@/components/GatewayStatus/index.vue';

@Component({
  components: {
    Thumbnail, Icon, GatewayStatus,
  },
})
export default class SwitchTerminalItem extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String }) title?: string

  @Prop({ type: String }) link?: string

  @Prop({ type: [String, Object] }) route?: Route

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) img!: string

  @Prop({ type: String }) alt!: string

  @Prop({ type: String }) state!: string

  stateText(state: string): string {
    let statusText = '';

    switch (state) {
    case 'ACTIVE':
      statusText = 'فعال';
      break;
    case 'INACTIVE':
      statusText = 'غیرفعال';
      break;
    case 'PENDING_SHAPARAK':
      statusText = 'ارسال شده به شاپرک';
      break;
    case 'PENDING':
      statusText = 'در انتظار';
      break;
    case 'REJECTED':
      statusText = 'رد شده';
      break;
    default:
      break;
    }

    return statusText;
  }
}
