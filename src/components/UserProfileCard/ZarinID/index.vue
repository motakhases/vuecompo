<template>
  <div
    class="zpl-user-card-id"
  >
    <span class="zpl-user-card-task-title">
      {{ id }}
    </span>
    <div :class="['circle',type]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
