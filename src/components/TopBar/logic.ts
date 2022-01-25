import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';
import Button from '@/components/Button/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import TerminalList from '@/components/TopBar/TerminalList/index.vue';

@Component({
  components: {
    Icon, Logo, Button, Notification, TerminalList,
  },
})
export default class TopBar extends Vue {
  showTerminalList = false

  @Prop({ type: Array }) terminals!: []

  toggleTerminalList(): void {
    this.showTerminalList = !this.showTerminalList;
  }
}
