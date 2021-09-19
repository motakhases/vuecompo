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
    <br>
    <Tag :btn="true">
      برچسب
    </Tag>
    <br>
    <br>
    <br>
    <br>
    <tabs>
      <tab title="لیبل تب">Hello From Tab 1</tab>
      <tab title="لیبل تب">Hello From Tab 2</tab>
      <tab title="لیبل تب">Hello From Tab 3</tab>
      <tab title="لیبل تب">Hello From Tab 4</tab>
    </tabs>
    <br>
    <br>
    <br>
    <tabs :fill-container="true">
      <tab title="لیبل تب">Hello From Tab 1</tab>
      <tab title="لیبل تب">Hello From Tab 2</tab>
      <tab title="لیبل تب">Hello From Tab 3</tab>
      <tab title="لیبل تب">Hello From Tab 4</tab>
    </tabs>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import CheckBox from './components/CheckBox/index.vue';
import Tag from './components/Tag/index.vue';
import tabs from './components/Tabs/index.vue';
import tab from './components/Tabs/Tab/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CheckBox, Tag, tabs, tab,
  },
  data() {
    return {
      testChecks: [
        { label: 'تسس', value: 'test' },
        { label: 'تست', value: 'testt' },
        { label: 'تسستس', value: 'testttt' },
      ],
      selcted: [],
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
