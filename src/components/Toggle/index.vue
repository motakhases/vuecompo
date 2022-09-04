<template>
  <div class="zpl-toggle">
    <div v-if="loading" class="zpl-toggle-loading">
      <Skeleton type="toggle" />
      <Skeleton type="body" class="w-2xl" />
    </div>
    <label :class="['zpl-toggle-input']" v-else>
      <input v-model="model" type="checkbox" :disabled="disabled" />
      <span class="slider" />
    </label>
    <div class="zpl-toggle-text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
