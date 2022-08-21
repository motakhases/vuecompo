import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import Button from '@/components/Button/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import TerminalList from '@/components/TopBar/TerminalList/index.vue';

@Component({
  components: {
    Icon, Logo, Button, Notification, TerminalList, Dropdown,
  },
})
export default class TopBar extends Vue {
  @Prop({ type: Array }) terminals!: []

  @Prop({ type: Boolean, default: true }) readonly hasMenu?: boolean

  @Prop({ type: String, default: 'عنوان درگاه' }) readonly activeTerminal?: string

  showTerminalList = false

  showProfileBox = false

  profileList = [
    {
      title: 'تنظیمات حساب',
      icon: 'UserProfileSquare',
      color: '',
      action: () => console.log('click'),
    },
    {
      title: 'حالت تیره',
      icon: 'NightModeCircle',
      color: '',
      action: this.toggleBodyClass,
    },
    {
      title: 'خروج',
      icon: 'ExitLogOut',
      color: '',
      action: () => console.log('click'),
    },
  ]

  toggleTerminalList(): void {
    this.showTerminalList = !this.showTerminalList;
  }

  terminalClick(payload: any): void {
    this.toggleTerminalList();
    this.$emit('terminalClick', payload);
  }

  toggleBodyClass() {
    const el = document.body;
    el.classList.toggle('dark');
  }
}
