<template>
  <td class="zpl-table-row-item">
    <div class="zpl-table-row-container">
      <slot />
      <div class="zpl-table-row-title">
        <span>
          {{ title }}
        </span>
        <span class="zpl-table-row-sub">
          {{ subText }}
        </span>
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
