<template>
  <div :class="['zpl-ds-row', columns]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
