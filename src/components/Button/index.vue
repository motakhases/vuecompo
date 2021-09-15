<template>
  <button
    :class="['zpl-button', size, type, { fill }]"
    :disabled="disabled"
  >
    <div
      v-if="loading"
      class="zpl-button-loading"
    >
      <div class="zpl-button-loading-1" />
      <div class="zpl-button-loading-2" />
    </div>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
