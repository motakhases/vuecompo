<template>
  <th class="zpl-table-header-item">
    <slot />
    <Icon
      v-if="arrowDown"
      name="filledArrowDown"
    />
    <Icon
      v-if="arrowUp"
      name="filledArrowUp"
    />
  </th>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
