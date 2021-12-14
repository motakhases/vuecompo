<template>
  <tr>
    <slot />
    <th
      v-if="fixed"
      class="zpl-table-fixed-cell"
    />
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
