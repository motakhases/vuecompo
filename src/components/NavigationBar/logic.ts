import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
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
  @Prop({ type: Boolean, default: false }) toggle!: boolean

  @Prop({ type: Array }) terminals!: []

  @Prop({ type: Array, required: true }) aboveLinks!: []

  @Prop({ type: Array }) belowLinks!: []
}
