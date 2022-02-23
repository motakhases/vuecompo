import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import { Route } from 'vue-router';

// Components
import Icon from '../../Icon/index.vue';
import Thumbnail from '../../Thumbnail/index.vue';
import GatewayStatus from '@/components/GatewayStatus/index.vue';

// Interface
interface IActiveTerminal {
  id: string
  domain: string
  logo: string
  name: string
  route: string
  status: string
}

@Component({
  components: {
    Thumbnail, Icon, GatewayStatus,
  },
})
export default class SwitchTerminalItem extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String }) id!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) link!: string

  @Prop({ type: [String, Object] }) route!: Route

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

  get terminalConcatedData(): IActiveTerminal {
    const {
      id, title, link, state, img, route,
    } = this.$props;

    /**
     * This pattern is based on
     * next-panel data
     */
    return {
      id,
      domain: link,
      logo: img,
      name: title,
      route,
      status: state,
    };
  }
}
