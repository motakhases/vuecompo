<template>
  <div
    class="zpl-nav-popover-container"
    dir="rtl"
  >
    <slot name="terminal" />
    <div class="zpl-nav-popover">
      <slot name="menu" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
