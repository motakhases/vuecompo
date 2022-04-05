<template>
  <div dir="rtl">
    <div @click="testt()">salam</div>

    <quick-filter
      :items="filters"
      query-key="filter"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import QuickFilter from '@/components/QuickFilter/index.vue';

export default Vue.extend({
  name: 'App',
  components: { QuickFilter },
  data() {
    return {
      filters: [
        {
          text: 'تست',
          value: 'test',
        },
        {
          text: 'دو تست',
          value: 'testttt',
        },
        {
          text: 'سه تست',
          value: 'testttttttttt',
        },
      ],
    };
  },
  methods: {
    testt() {
      this.$router.push({ query: { hello: 'what' } });
    },
  },
});
</script>
