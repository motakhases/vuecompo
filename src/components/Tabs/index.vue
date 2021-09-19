<template>
  <div>
    <ul :class="['zpl-tabs', {'full-tabs':fillContainer}]">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="['tab', {active:index==selectedIndex}]"
        @click="selectTab(index)"
      >
        <span>
          {{ tab.title }}
        </span>
        <i v-show="false" class="warn-circle" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'Tabs',
  props: {
    fillContainer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
    console.log(this.tabs);
  },
  mounted() {
    this.selectTab(0);
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        const activeTab = tab;
        activeTab.isActive = (index === i);
      });
    },
  },
});

</script>
