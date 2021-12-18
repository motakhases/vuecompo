<template>
  <div>
    <DatePicker
      v-model="date"
    />
    {{ date }}
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import DatePicker from '@/components/DatePicker/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    DatePicker,
  },

  data() {
    return {
      date: '',
    };
  },
});
</script>
