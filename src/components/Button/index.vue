<template>
  <button
    :class="['zpl-button', size]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>

<style>
.zpl-button {
  /* Default */
  @apply bg-[#0A33FF] text-white rounded-[4px];

  /* Hover */
  @apply hover:bg-[#082BD5];

  /* Active */
  @apply active:bg-[#0722AA];

  /* Disabled */
  @apply disabled:bg-[#9DADFF] cursor-default;
}

.zpl-button.small {
  @apply px-[12px] py-[4px];
}

.zpl-button.medium {
  @apply px-[16px] py-[8px];
}

.zpl-button.large {
  @apply px-[24px] py-[12px];
}
</style>
