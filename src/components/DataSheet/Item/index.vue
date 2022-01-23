<template>
  <div :class="['zpl-ds-item', spans, row]">
    <span class="zpl-ds-item-title">
      {{ title }}
    </span>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
