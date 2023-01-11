import {
  Vue, Prop, Component, Ref,
} from 'vue-property-decorator';

// Interfaces
import { INavigationBarTerminal, INavigationBarActiveTerminal } from '@/types';

// Components
import Create from '../Create/index.vue';
import Overview from '../Overview/index.vue';
import SwitchTerminal from '../SwitchTerminal/index.vue';
import SwitchTerminalItem from '../SwitchTerminalItem/index.vue';

@Component({
  components: {
    Create,
    Overview,
    SwitchTerminal,
    SwitchTerminalItem,
  },
})
export default class SwitchTerminalPopover extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: Array }) terminals!: INavigationBarTerminal[];

  @Prop({ type: Object }) activeTerminal?: INavigationBarTerminal;

  @Ref('terminal') readonly terminal!: HTMLElement;

  @Prop({ type: String, required: true, default: '/36x36.png' }) logoAddress!: string

  showPopover = false;

  get hasActive(): boolean {
    return !!(this.activeTerminal && this.activeTerminal.domain);
  }

  get switcher(): INavigationBarActiveTerminal {
    return {
      title:
        this.activeTerminal && this.activeTerminal.name
          ? this.activeTerminal.name
          : this.$i18n.t('common.overview'),
      link:
        this.activeTerminal && this.activeTerminal.domain
          ? this.activeTerminal.domain
          : '',
      icon:
        this.activeTerminal && this.activeTerminal.name
          ? 'terminal'
          : 'ChartSquare',
    };
  }

  /**
   * Mounted
   */
  mounted(): void {
    document.documentElement.addEventListener(
      'click',
      this.outsideClick,
      false,
    );
  }

  handleShowPopover() {
    this.showPopover = true;
  }

  handleHidePopover() {
    this.showPopover = false;
  }

  outsideClick(event: Event): void {
    if (!this.terminal?.children[0].contains(event.target as HTMLInputElement)) {
      this.$nextTick(() => {
        this.showPopover = false;
      });
    }
  }
}
