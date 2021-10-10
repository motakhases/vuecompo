import Vue from 'vue';

export default Vue.extend({
  name: 'Tabs',

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
