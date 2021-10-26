<template>
  <button
    :class="['zpl-segment-button', { active }]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
