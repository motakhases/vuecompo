<template>
  <div
    :class="['zpl-avatar-progress', size, type, { fill }]"
    data-percentage="50"
  >
    <svg
      viewBox="0 0 33.83098862 33.83098862"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="zpl-avatar-progress-circle"
        cx="50%"
        cy="50%"
        r="calc(50% - 2px)"
      />
      <circle
        v-if="percent !== 0"
        class="circle-chart__circle success-stroke"
        :stroke-dasharray="[percent, 100]"
        cx="50%"
        cy="50%"
        r="calc(50% - 2px)"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
