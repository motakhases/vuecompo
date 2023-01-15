import {
  Prop, Component, Ref,
} from 'vue-property-decorator';

// Interfaces
import { INavigationBarTerminal, INavigationBarActiveTerminal } from '@/types';

// Components
import KeyNavigate from '@/utils/class_components/KeyNavigate';
import Create from '../Create/index.vue';
import Overview from '../Overview/index.vue';
import SwitchTerminal from '../SwitchTerminal/index.vue';
import SwitchTerminalItem from '../SwitchTerminalItem/index.vue';

const { useWindowSize } = require('@vueuse/core');

@Component({
  components: {
    Create,
    Overview,
    SwitchTerminal,
    SwitchTerminalItem,
  },
})
export default class SwitchTerminalPopover extends KeyNavigate {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: Array }) terminals!: INavigationBarTerminal[];

  @Prop({ type: Object }) activeTerminal?: INavigationBarTerminal;

  @Ref('terminal') readonly terminal!: HTMLElement;

  @Prop({ type: String, default: '/36x36.png' }) logoAddress!: string

  showPopover = false;

  isFocused = false

  created(): void {
    this.kOrder = ['switchTerminalItem'];
    this.kCreated();
  }

  get hasActive(): boolean {
    return !!(this.activeTerminal && this.activeTerminal.domain);
  }

  get maxHeightList(): number {
    const { height } = useWindowSize();
    return Math.round((height.value / 100) * 70);
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
      img:
      this.activeTerminal && this.activeTerminal.domain
        ? this.activeTerminal.logo + this.logoAddress
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

  onKeyDown(e: KeyboardEvent) {
    this.kDoKeyDown(e);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(e: KeyboardEvent): void {
    this.isFocused = false;
    if (this.showPopover) {
      this.kDoBlurComp(e);
      this.showPopover = false;
      this.kDestroyKeyUp();
    }
  }

  onEnter(e: KeyboardEvent):void {
    this.isFocused = false;
    this.showPopover = true;
    this.$nextTick(() => {
      this.kDoKeyup(e, 'Tab');
    });
  }

  beforeDestroy():void {
    this.kDestroyKeyUp();
  }
}
