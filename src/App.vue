<template>
  <div class="p-4xl bg-[#c1e0c1]">
    <CheckBox
      v-model="selcted"
      :options="testChecks"
    />
    <br>
    <Tag :btn="true">
      برچسب
    </Tag>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckBox from './components/CheckBox/index.vue';
import Tag from './components/Tag/index.vue';

export default Vue.extend({
  name: 'App',
  components: { CheckBox, Tag },
  data() {
    return {
      testChecks: [
        { label: 'test', value: false },
        { label: 'secondTest', value: true },
      ],
      selcted: [],
    };
  },
  created() {
    console.log(this.testChecks);
  },
});
</script>
