<template>
  <div class="w-[400px] mx-auto mt-lg">
    <FilterAmount
      v-model="date"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import FilterAmount from '@/components/Filters/FilterAmount/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    FilterAmount,
  },

  data() {
    return {
      date: '',
    };
  },
});
</script>
