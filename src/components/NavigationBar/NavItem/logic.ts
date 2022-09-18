import {
  Vue, Prop, Component,
} from 'vue-property-decorator';
// Interfaces
import {
  INavigationBarLinks,
} from '@/types';
// Components
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import Icon from '@/components/Icon/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';
import PremiumBadge from '@/components/PremiumBadge/index.vue';

@Component({
  components: {
    Icon, NotificationBadge, Tooltip, PremiumBadge,
  },
})
export default class NavItem extends Vue {
  @Prop({ type: [String, Object] }) link!: string | { name?: string, path?: string }

  @Prop({ type: Array }) readonly subMenu?: INavigationBarLinks[]

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) badge!: string

  @Prop({ type: Boolean }) premiumBadge!: boolean

  @Prop({ type: Function }) toggle!: () => boolean

  @Prop({ type: Boolean }) isShow!: boolean

  @Prop({ type: Boolean }) divider!: boolean

  showSub = false

  toggleSub() {
    if (this.isShow) {
      this.toggle();
      this.showSub = true;
    } else {
      this.showSub = !this.showSub;
    }
  }

  toggleMobileHandler(): void {
    if (window.innerWidth < 992) {
      this.toggle();
    }
  }

  findBadge(subList: any) {
    const subListAsArray = Object.values(subList);
    const subListValuesAsArray = Object.values(subListAsArray);
    const hasBadge = (obj: any): obj is any => obj?.badge !== undefined;
    const badge = subListValuesAsArray.filter(hasBadge);
    return badge.length ? badge[0].badge : null;
  }
}
