import {
  Prop, Component,
} from 'vue-property-decorator';

// Interfaces
import {
  INavigationBarTerminal,
} from '@/types';

// Components
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import Button from '@/components/Button/index.vue';
import KeyNavigate from '@/utils/class_components/KeyNavigate';
import NavItem from './NavItem/index.vue';
import SwitchTerminalPopover from './SwitchTerminalPopover/index.vue';

const { screens } = require('@/designTokens/screens');

const { toInt } = require('@/utils/converts');

@Component({
  components: {
    Icon, Logo, NavItem, SwitchTerminalPopover, Button,
  },
})
export default class NavigationBar extends KeyNavigate {
  @Prop({ type: Array }) readonly terminals!: INavigationBarTerminal[]

  @Prop({ type: Array, required: true }) readonly navItems!: INavigationBarTerminal[]

  @Prop({ type: Object }) readonly activeTerminal?: INavigationBarTerminal

  isCollapsed = false;

  isVisible = false;

  isDrawer = false;

  isFixed = false;

  isToggle = true;

  showSwitch = false;

  zplLogo = 'topbar';

  menuBurger = 'topbar';

  created(): void {
    this.kOrder = ['switchTerminalPopover', 'navItem'];
    this.kOnMySec = true;
    this.kMainNav = this;
    this.kSetCurComp(this);
    window.addEventListener('keyup', this.kOnGlobalKeyup);
    document.body.addEventListener('keyup', this.kOnGlobalKeyup);
    this.kCreated();
  }

  private detStats() {
    const [xl, slg] = toInt(screens.xl, screens.lg);
    const width = window.innerWidth;
    if (width > slg) {
      this.showSwitch = true;
      this.isVisible = true;
      if (this.isToggle) {
        if (width < xl) {
          this.isDrawer = true;
        } else {
          this.isDrawer = false;
        }
        this.isCollapsed = false;
      } else {
        this.isCollapsed = true;
        this.isDrawer = false;
      }
    } else {
      this.isVisible = false;
      this.showSwitch = false;
      this.isCollapsed = false;
      if (this.isToggle) {
        this.isDrawer = true;
      } else {
        this.isDrawer = false;
      }
    }
    if (width > xl) {
      this.menuBurger = 'topbar';
      this.zplLogo = 'topbar';
      if (this.isToggle) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    } else {
      this.isFixed = false;
      if (this.isToggle) {
        if (this.isDrawer) {
          this.zplLogo = 'navbar';
          this.menuBurger = 'navbar';
        } else {
          this.menuBurger = 'topbar';
        }
      } else {
        this.zplLogo = 'topbar';
        this.menuBurger = 'topbar';
      }
    }
  }

  toggle(): void {
    this.detStats();
  }

  toggleMenu() {
    this.isToggle = !this.isToggle;
    this.detStats();
  }

  onResize(): void {
    this.detStats();
  }

  mounted(): void {
    const [slg] = toInt(screens.lg);
    const width = window.innerWidth;
    if (width < slg) {
      this.isToggle = false;
    }
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('click', this.kOnGlobalClick);
  }

  onKeyDown(e: KeyboardEvent) {
    this.kDoKeyDown(e);
  }

  onKeyup(e: KeyboardEvent) {
    const { key } = e;
    const curComp = this.kCurComp ?? this;
    if (curComp.kOnMySec) {
      curComp.kDoKeyup(e);
    } else if (curComp.kMainNav) {
      if (key === 'Tab' || (key === 'Tab' && this.kFindKeyDown('Shift'))) {
        this.kDoBlurComp(e);
        this.kOnMySec = true;
        if ((this.kCurKeyMove === 'Tab' && (key === 'Tab' && this.kFindKeyDown('Shift')))
          || (this.kCurKeyMove === 'ShiftTab' && key === 'Tab')) {
          curComp.kDoKeyup(e);
        } else {
          this.kDestroyKeyUp();
          this.kDoFocusOut();
        }
      }
    }
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keyup', this.kOnGlobalKeyup);
    window.removeEventListener('click', this.kOnGlobalClick);
    document.body.removeEventListener('keyup', this.kOnGlobalKeyup);
    this.kDestroyKeyUp();
  }
}
