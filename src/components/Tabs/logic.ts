import { Vue, Prop, Component } from 'vue-property-decorator';
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';
import Tab from './Tab/logic';

@Component({
  components: {
    NotificationBadge,
    Skeleton,
  },
})
export default class Tabs extends Vue {
  @Prop({ type: Boolean, default: false }) fillContainer?: boolean;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: Number, default: 1 }) readonly loadingNumber!: number;

  selectedIndex = 0;

  tabs: Tab[] = [];

  selectTab(tabIndex: number): void {
    this.selectedIndex = tabIndex;
    // loop over all the tabs
    this.tabs.forEach((tab, index: number) => {
      const activeTab = tab;
      activeTab.isActive = index === tabIndex;
      if (activeTab.isActive) {
        activeTab.warning = false;
      }
    });
  }

  created(): void {
    this.tabs = this.$children as Tab[];
  }

  mounted(): void {
    this.selectTab(0);
  }
}
