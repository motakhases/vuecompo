import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Interfaces
import {
  INavigationBarTerminal,
  INavigationBarLinks,
} from '@/types';

// Components
import NavItem from './NavItem/index.vue';
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
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
}
