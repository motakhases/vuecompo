<template>
  <div class="rtl">
    <div class="zpl-topbar-container">
      <div class="zpl-topbar-right-side">
        <slot name="right-side" />
      </div>
      <div class="zpl-topbar-left-side">
        <slot name="left-side" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
