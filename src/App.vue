<template>
  <div class="dark">
    <Button>
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

<style></style>
