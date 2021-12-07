<template>
  <div class="zpl-filter-actions">
    <div>
      فیلتر
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
