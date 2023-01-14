import {
  Vue, Prop, Component,
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

const { lg } = require('@/utils/helper');
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
  isToggle = false;

  showSwitch = false;
  zplLogo = 'topbar';
  menuBurger = 'topbar';

  created(): void {
    this.f_order = ['switchTerminalPopover','navItem']
    this.f_onMySec = true;
    this.f_mainNav = this;
    this.f_setCurComp(this);
    window.addEventListener('keyup', this.f_onGlobalKeyup);
    document.body.addEventListener('keyup', this.f_onGlobalKeyup);
    this.f_created()
  }

  private detStats(){
    const [xl,lg] = toInt(screens.xl,screens.lg);
    const width = window.innerWidth;
    if(width > lg){
      this.showSwitch = true;
      this.isVisible = true
      if(this.isToggle){
        if(width < xl){
          this.isDrawer = true
        }
        else{
          this.isDrawer = false
        }
        this.isCollapsed = false
      }
      else{
        this.isCollapsed = true
        this.isDrawer = false
      }
    }
    else{
      this.isVisible = false
      this.showSwitch = false;
      this.isCollapsed = false;
      if(this.isToggle){
        this.isDrawer = true
      }
      else{
        this.isDrawer = false
      }
    }
    if(width > xl){
      this.menuBurger = 'topbar'
      this.zplLogo = 'topbar';
      if(this.isToggle){
        this.isFixed = true
      }
      else{
        this.isFixed = false
      }
    }
    else{
      this.isFixed = false
      if(this.isToggle){
        if(this.isDrawer){
          this.zplLogo = 'navbar'
          this.menuBurger = 'navbar'
        }
        else{
          this.menuBurger = 'topbar'
        }
      }
      else{
        this.zplLogo = 'topbar'
        this.menuBurger = 'topbar'
      }
    }
  }

  toggle(): void {
    this.detStats()
  }

  toggleMenu(){
    this.isToggle = !this.isToggle;
    this.detStats()
  }

  onResize(): void {
    this.detStats()
  }

  mounted(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('click', this.f_onGlobalClick);
  }

  onKeyDown(e: KeyboardEvent){
    lg(e,'navbar onKeyDown',2)
    this.f_doKeyDown(e)
  }

  onKeyup(e: KeyboardEvent){
    const {key} = e
    lg(key,'NavBar > key')
    lg(this.f_onMySec,'NavBar > this.onMySec',2)
    const curComp = this.f_curComp??this
    lg(curComp.f_onMySec,'NavBar > curComp.onMySec',2)
    if(curComp.f_onMySec){
      lg(key,'NavBar > going run..... f_doKeyup 1',2)
      curComp.f_doKeyup(e)
    }
    else if(curComp.f_mainNav){ // in yani dar iteme akhari mainNav hastim va mikhahim beparim biroon
      const {key} = e
      if(key==='Tab'||(key==='Tab'&&this.f_findKeyDown('Shift'))){
        lg(key,'NavBar > going active..... mysec',2)
        this.f_doBlurComp(e)
        this.f_onMySec = true
        if((this.f_curKeyMove === 'Tab'&&(key==='Tab'&&this.f_findKeyDown('Shift')))
          ||(this.f_curKeyMove === 'ShiftTab'&&key==='Tab')){
          lg(key,'NavBar > going run..... f_doKeyup 2',2)
          curComp.f_doKeyup(e)
        }
        else{
          this.f_destroyKeyUp()
          this.f_doFocusOut()
        }
      }
    }
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keyup', this.f_onGlobalKeyup);
    window.removeEventListener('click', this.f_onGlobalClick);
    document.body.removeEventListener('keyup', this.f_onGlobalKeyup);
    this.f_destroyKeyUp()
  }
}
