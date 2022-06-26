<template>
  <div :class="['zpl-accordion', { 'right-icon-style': rightIconStyle }]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
