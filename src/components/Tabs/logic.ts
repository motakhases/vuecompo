import Vue from 'vue';
import NotificationBadge from '@/components/NotificationBadge/index.vue';

export default Vue.extend({
  name: 'Tabs',
  components: { NotificationBadge },
  props: {
    fillContainer: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectedIndex: 0,
      tabs: <any>[],
    };
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    this.selectTab(0);
  },

  methods: {
    selectTab(tabIndex:number) {
      this.selectedIndex = tabIndex;
      // loop over all the tabs
      this.tabs.forEach((tab:any, index:number) => {
        const activeTab = tab;
        activeTab.isActive = (index === tabIndex);
        if (activeTab.isActive) {
          activeTab.warn = false;
        }
      });
    },
  },
});
