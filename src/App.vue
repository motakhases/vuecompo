<template>
  <div class="p-[36px] dark:bg-black flex gap-[8px]">
    <button class="z-button">
      Button
    </button>
    <button
      class="z-button"
      disabled
    >
      Button
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss">
.z-button {
  // Default
  @apply p-btn-md bg-primary-light text-white dark:bg-primary-dark dark:text-text;

  // Hover
  @apply hover:bg-primary-light-hover hover:dark:bg-primary-dark-hover;

  // Active
  @apply active:bg-primary-light-active active:dark:bg-primary-dark-active;

  // Disabled
  @apply disabled:bg-primary-light-disabled disabled:dark:bg-primary-dark-disabled;
}
</style>
