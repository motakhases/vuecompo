<template>
  <div
    :class="['zpl-store-status', state ]"
    dir="rtl"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
