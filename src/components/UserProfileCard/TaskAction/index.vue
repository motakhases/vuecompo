<template>
  <router-link
    :to="link"
    class="zpl-user-card-task"
    :disabled="disabled"
    :event="disabled ? '' : 'click'"
  >
    <span class="zpl-user-card-task-title">
      <slot />
    </span>
    <Icon
      v-if="!disabled"
      name="angleLeft"
    />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
