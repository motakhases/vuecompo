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
  @Prop({ type: Boolean, default: false }) toggle!: boolean

  @Prop({ type: Array }) terminals!: INavigationBarTerminal[]

  @Prop({ type: Array, required: true }) aboveLinks!: INavigationBarLinks[]

  @Prop({ type: Array }) belowLinks!: INavigationBarTerminal[]

  @Prop({ type: Object }) activeTerminal?: INavigationBarTerminal
}
