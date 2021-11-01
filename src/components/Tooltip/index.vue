<template>
  <div class="zpl-tooltip-container">
    <slot />
    <div :class="['zpl-tooltip', position]">
      <Indicator :position="position" />
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
