<template>
  <button
    :class="['zpl-button', size, type]"
    :disabled="disabled"
  >
    <slot />
    <Icon
      name="chevronUp"
      class="text-surface w-md h-xs"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
