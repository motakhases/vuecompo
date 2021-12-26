<template>
  <div class="zpl-avatar-progress-box">
    <div
      class="zpl-avatar-progress"
      data-percentage="50"
    >
      <svg
        viewBox="0 0 33.83098862 33.83098862"
        xmlns="http://www.w3.org/2000/svg"
        class="zpl-avatar-progress-icon"
      >
        <!-- container circle -->
        <circle
          class="zpl-avatar-progress-circle"
          cx="50%"
          cy="50%"
          r="calc(50% - 1px)"
        />
        <!-- level circle -->
        <circle
          v-if="percent !== 0"
          :class="['zpl-avatar-progress-level', type]"
          :stroke-dasharray="[percent, 100]"
          cx="50%"
          cy="50%"
          r="calc(50% - 1px)"
        />
      </svg>
      <Avatar
        size="large"
        :img="img"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
