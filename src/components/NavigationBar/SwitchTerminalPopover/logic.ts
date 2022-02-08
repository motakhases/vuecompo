import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Interfaces
import {
  INavigationBarTerminal,
  INavigationBarActiveTerminal,
} from '@/types';

// Components
import Create from '../Create/index.vue';
import Overview from '../Overview/index.vue';
import SwitchTerminal from '../SwitchTerminal/index.vue';
import SwitchTerminalItem from '../SwitchTerminalItem/index.vue';

@Component({
  components: {
    Create, Overview, SwitchTerminal, SwitchTerminalItem,
  },
})
export default class SwitchTerminalPopover extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean

  @Prop({ type: Array }) terminals!: INavigationBarTerminal[]

  @Prop({ type: Object }) activeTerminal?: INavigationBarTerminal

  get hasActive(): boolean {
    return !!(this.activeTerminal && this.activeTerminal.domain);
  }

  get switcher(): INavigationBarActiveTerminal {
    return {
      title: this.activeTerminal && this.activeTerminal.name ? this.activeTerminal.name : 'نمای کلی',
      link: this.activeTerminal && this.activeTerminal.domain ? this.activeTerminal.domain : '',
      icon: this.activeTerminal && this.activeTerminal.name ? 'terminal' : 'ChartSquare',
    };
  }
}
