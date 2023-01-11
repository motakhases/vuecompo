import {
  Vue, Prop, Component, Ref,
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
const { lg } = require('@/utils/helper');

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

  showPopover = false;

  isFocused = false

  created(): void {
    this.f_order = ['switchTerminalItem']
    this.f_created()
  }

  get hasActive(): boolean {
    return !!(this.activeTerminal && this.activeTerminal.domain);
  }

  get maxHeightList(): number {
    const {height} = useWindowSize()
    return Math.round((height.value/100)*70);
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

  onKeyDown(e: KeyboardEvent){
    lg(e,'popover onKeyDown',2)
    this.f_doKeyDown(e)
  }

  onKeyup(e: KeyboardEvent){
    lg(this.f_onMySec,'poopver onKeyup')
  }

  onFocus(e: KeyboardEvent): void {
    this.isFocused = true;
    lg('poopver onFocus')
  }

  onBlur(e: KeyboardEvent): void {
    lg('poopver onBlur')
    this.isFocused = false;
    if(this.showPopover){
      this.f_doBlurComp(e)
      this.showPopover = false
      this.f_destroyKeyUp()
    }
  }

  onEnter(e: KeyboardEvent):void {
    lg('poopver onEnter')
    this.isFocused = false;
    this.showPopover = true
    this.$nextTick(()=>{
      this.f_doKeyup(e,'Tab')
    })
  }

  beforeDestroy():void {
    this.f_destroyKeyUp()
  }
}
