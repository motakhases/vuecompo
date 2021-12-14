<template>
  <button
    :class="['zpl-segment-button', { active }]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
