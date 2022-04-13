import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

// Components
import NavBadge from '../../NavBadge/index.vue';
import Icon from '../../Icon/index.vue';
import Tooltip from '../../Tooltip/index.vue';

@Component({
  components: {
    Icon, NavBadge, Tooltip,
  },
})
export default class NavItem extends Vue {
  @Prop({ type: [String, Object] }) link!: string | { name?: string, path?: string }

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) badge!: string

  @Prop({ type: Function }) toggle!: () => boolean

  toggleMobileHandler(): void {
    if (window.innerWidth < 992) {
      this.toggle();
    }
  }
}
