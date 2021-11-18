<template>
  <a
    class="zpl-user-card-task"
    :disabled="disabled"
    href="#sss"
  >
    <span class="zpl-user-card-task-title">
      <slot />
    </span>
    <Icon
      v-if="!disabled"
      name="angleLeft"
    />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
