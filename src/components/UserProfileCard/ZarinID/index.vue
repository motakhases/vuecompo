<template>
  <div
    class="zpl-user-card-id"
  >
    <span class="zpl-user-card-task-title">
      <slot />
    </span>
    <div
      v-if="level"
      :class="['circle',level]"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
