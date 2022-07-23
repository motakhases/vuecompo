<template>
  <div class="zpl-skeleton">
    <div :class="['zpl-skeleton-item',color,type]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
