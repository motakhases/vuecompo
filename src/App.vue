<template>
  <div class="p-[36px]">
    <Button
      size="large"
    >
      Button
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from './components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Button,
  },
});
</script>
