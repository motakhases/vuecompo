<template>
  <label
    :class="['zpl-toggle']"
  >
    <input
      v-model="model"
      type="checkbox"
      :disabled="disabled"
    >
    <span class="slider" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
