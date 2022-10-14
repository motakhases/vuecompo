import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import Button from '@/components/Button/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import TerminalList from '@/components/TopBar/TerminalList/index.vue';
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import { IDropdownOptions } from '@/types';
import UserProfile from './UserProfile/index.vue';

@Component({
  components: {
    Icon, Logo, Button, Notification, TerminalList, NotificationBadge, UserProfile,
  },
})
export default class TopBar extends Vue {
  @Prop({ type: Array }) terminals!: []

  @Prop({ type: Boolean, default: true }) readonly hasMenu?: boolean

  @Prop({ type: Boolean, default: false }) readonly centerLogo?: boolean

  @Prop({ type: String, default: 'عنوان درگاه' }) readonly activeTerminal?: string

  @Prop({ type: String }) readonly notificationBadge?: string

  @Prop({ type: String }) readonly ticketingBadge?: string

  @Prop({ type: Array }) readonly profileList!: IDropdownOptions[];

  @Prop({ type: String }) readonly username?: string

  @Prop({ type: String }) readonly userPhone?: string

  @Prop({ type: Boolean }) readonly userPremium?: boolean

  showTerminalList = false

  showProfileBox = false

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
