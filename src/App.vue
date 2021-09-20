<template>
  <div
    dir="rtl"
    class="p-4xl bg-[#c1e0c1]"
  >
    <CheckBox
      v-model="selctedCheck"
      :options="testChecks"
      name="test"
    />
    <br>
    <br>
    <Radio
      v-model="selectedRadio"
      :options="testChecks"
      name="test"
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
      <tab title="۱لیبل تب">Hello From Tab 1</tab>
      <tab title="۲لیبل تب">Hello From Tab 2</tab>
      <tab title="۳لیبل تب">Hello From Tab 3</tab>
      <tab title="۴لیبل تب">Hello From Tab 4</tab>
    </tabs>
    <br>
    <br>
    <br>
    <tabs :fill-container="true">
      <tab title="۱لیبل تب">Hello From Tab 1</tab>
      <tab title="۲لیبل تب">Hello From Tab 2</tab>
      <tab title="۳لیبل تب">Hello From Tab 3</tab>
      <tab title="۴لیبل تب">Hello From Tab 4</tab>
    </tabs>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import CheckBox from './components/CheckBox/index.vue';
import Radio from './components/Radio/index.vue';
import Tag from './components/Tag/index.vue';
import tabs from './components/Tabs/index.vue';
import tab from './components/Tabs/Tab/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CheckBox, Tag, tabs, tab, Radio,
  },
  data() {
    return {
      testChecks: [
        { label: 'تسس', value: 'test' },
        { label: 'تست', value: 'testt' },
        { label: 'تسستس', value: 'testttt' },
      ],
      selctedCheck: [],
      selectedRadio: 'test',
    };
  },
  methods: {
    getActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
});
</script>
