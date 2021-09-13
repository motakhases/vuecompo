<template>
  <label :class="['zpl-checkbox']"> <slot />
    <input
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
    >
    <span class="checkmark" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
