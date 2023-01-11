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
import KeyNavigate from '@/utils/class_components/KeyNavigate';

const { screens } = require('@/designTokens/screens');

const { toInt } = require('@/utils/converts');
const { lg } = require('@/utils/helper');

@Component({
  components: {
    Icon, NotificationBadge, Tooltip, PremiumBadge,
  },
})
export default class NavItem extends KeyNavigate {
  @Prop({ type: [String, Object] }) link!: string | { name?: string, path?: string }

  @Prop({ type: Array }) readonly subMenu?: INavigationBarLinks[]

  @Prop({ type: String }) icon!: string

  @Prop({ type: String }) title!: string

  @Prop({ type: String }) badge!: string

  @Prop({ type: Boolean }) premiumBadge!: boolean

  @Prop({ type: Function }) toggle!: () => boolean

  @Prop({ type: Boolean }) isCollapsed!: boolean

  @Prop({ type: Boolean }) divider!: boolean

  showSub = false

  active = false

  isFocused = false

  created(): void {
    this.f_order = ['subMenu']
  }

  toggleSub() {
    if (!this.isCollapsed) {
      this.toggle();
    }
    this.showSub = !this.showSub;
  }

  toggleMobileHandler(): void {
    const [lg] = toInt(screens.lg);
    if (window.innerWidth < lg) {
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

  get subMenuActive() {
    if (this.subMenu) {
      for (let index = 0; index < this.subMenu.length; index += 1) {
        const link = this.subMenu[index];
        if (link.active) {
          return true;
        }
      }
    }
    return false;
  }

  onKeyup(e: KeyboardEvent){
    lg('NavItem onKeyup')
  }

  onFocus(e: KeyboardEvent): void {
    lg(this.f_onMySec,'NavItem onFocus')
    this.isFocused = true;
  }

  onBlur(e: KeyboardEvent): void {
    lg('NavItem onBlur')
    this.isFocused = false;
  }

  onEnter(e: KeyboardEvent){
    lg('NavItem onEnter')
  }

  beforeDestroy():void {
    this.f_destroyKeyUp()
  }
}
