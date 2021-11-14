<template>
  <tr class="zpl-table-row-item">
    <slot />
    <span>
      <slot name="text" />
    </span>
    <span class="zpl-table-row-sub">
      <slot name="subText" />
    </span>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
