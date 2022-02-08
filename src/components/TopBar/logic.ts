import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import Button from '@/components/Button/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import TerminalList from '@/components/TopBar/TerminalList/index.vue';
import UserProfile from '@/components/TopBar/UserProfile/index.vue';

@Component({
  components: {
    Icon, Logo, Button, Notification, TerminalList, UserProfile,
  },
})
export default class TopBar extends Vue {
  showTerminalList = false

  showProfileBox = false

  @Prop({ type: Array }) terminals!: []

  toggleTerminalList(): void {
    this.showTerminalList = !this.showTerminalList;
  }
}
