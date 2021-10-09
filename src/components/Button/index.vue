<template>
  <button
    :class="['zpl-button', size, type]"
    :disabled="disabled"
  >
    <slot />
    <BaseIcon
      name="ChevronUp"
      class="text-xl text-blue-500"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
