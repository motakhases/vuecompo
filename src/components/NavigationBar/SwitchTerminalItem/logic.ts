import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import Thumbnail from '../../Thumbnail/index.vue';
import Icon from '../../Icon/index.vue';
import GatewayStatus from '@/components/GatewayStatus/index.vue';

@Component({
  components: {
    Thumbnail, Icon, GatewayStatus,
  },
})
export default class SwitchTerminalItem extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: String, default: 'عنوان درگاه' }) title!: string

  @Prop({ type: String, default: 'zarinp.al/getway' }) link!: string

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
    case 'deactive':
      statusText = 'رد شده';
      break;
    default:
      break;
    }

    return statusText;
  }
}

