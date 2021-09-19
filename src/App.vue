<template>
  <div
    dir="rtl"
    class="p-4xl bg-[#c1e0c1]"
  >
    <CheckBox
      v-model="selcted"
      :options="testChecks"
    />
    <br>
    <Tag :btn="true">
      برچسب
    </Tag>
    <br>
    <Tabs
      :options="testTabs"
      :fill-container="true"
      @activeTab="getActiveTab"
    />
    <div v-if="activeTab=='first'">
      first tab is active
    </div>
    <div v-if="activeTab=='second'">
      second tab is active
    </div>
    <div v-if="activeTab=='third'">
      third tab is active
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import CheckBox from './components/CheckBox/index.vue';
import Tag from './components/Tag/index.vue';
import Tabs from './components/Tabs/index.vue';

export default Vue.extend({
  name: 'App',
  components: { CheckBox, Tag, Tabs },
  data() {
    return {
      testChecks: [
        { label: 'test', value: false },
        { label: 'secondTest', value: true },
      ],
      selcted: [],
      testTabs: [
        { label: 'تست', name: 'first' },
        { label: 'تست', name: 'second' },
        { label: 'تست', name: 'third' },
      ],
      activeTab: '',
    };
  },
  created() {
    console.log(this.testChecks);
  },
  methods: {
    getActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
});
</script>
