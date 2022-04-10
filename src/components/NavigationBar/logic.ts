import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Interfaces
import {
  INavigationBarTerminal,
  INavigationBarLinks,
} from '@/types';

// Components
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import NavItem from './NavItem/index.vue';
import SwitchTerminalPopover from './SwitchTerminalPopover/index.vue';

@Component({
  components: {
    Icon, Logo, NavItem, SwitchTerminalPopover,
  },
})
export default class NavigationBar extends Vue {
  @Prop({ type: Array }) readonly terminals!: INavigationBarTerminal[]

  @Prop({ type: Array, required: true }) readonly aboveLinks!: INavigationBarLinks[]

  @Prop({ type: Array }) readonly belowLinks!: INavigationBarTerminal[]

  @Prop({ type: Object }) readonly activeTerminal?: INavigationBarTerminal

  isShow = false;

  toggle(): void {
    this.isShow = !this.isShow;
  }

  onResize(): void {
    const width = window.innerWidth;

    if (width >= 992 && width < 1200) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  mounted(): void {
    window.addEventListener('load', this.onResize);
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
  }
}
