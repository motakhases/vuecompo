<template>
  <div class="zpl-tooltip-container" ref="tooltipBtn">
    <slot />
    <div ref="tooltip">
      <div v-if="toggle" :class="['zpl-tooltip', position, space, size]" :style="[style]">
        <Indicator v-if="indicator" :position="position" />
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
