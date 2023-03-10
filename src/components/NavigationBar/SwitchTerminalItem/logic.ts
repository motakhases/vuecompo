import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Translation, IActiveTerminal } from '@/types';

// Components
import Status from '@/components/Status/index.vue';
import Icon from '@/components/Icon/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';

const { lg } = require('@/utils/helper');
// Interface
@Component({
  components: {
    Thumbnail, Icon, Status,
  },
})
export default class SwitchTerminalItem extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean

  @Prop({ type: Boolean, default: false }) pinned!: boolean

  @Prop({ type: String }) id!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) link!: string

  @Prop({ type: [String, Object] }) route!: Route

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) img!: string

  @Prop({ type: String }) alt!: string

  @Prop({ type: String }) state!: string

  isFocused = false

  stateText(state: Translation): Translation {
    let statusText: Translation = '';

    switch (state) {
    case 'ACTIVE':
      statusText = this.$i18n.t('status.ACTIVE');
      break;
    case 'INACTIVE':
      statusText = this.$i18n.t('status.INACTIVE');
      break;
    case 'PENDING_SHAPARAK':
      statusText = this.$i18n.t('status.PENDING_SHAPARAK');
      break;
    case 'PENDING':
      statusText = this.$i18n.t('status.PENDING');
      break;
    case 'REJECTED':
      statusText = this.$i18n.t('status.REJECTED');
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

  onFocus(): void {
    this.isFocused = true;
    lg('SwitchTerminalItem onFocus');
  }

  onBlur(): void {
    lg('SwitchTerminalItem onBlur');
    this.isFocused = false;
  }

  onEnter(e: KeyboardEvent, callerComp):void {
    lg('SwitchTerminalItem onEnter');
    this.isFocused = false;
    this.$emit('terminalClick', this.terminalConcatedData);
    callerComp.kDoBlurComp(e);
  }
}
