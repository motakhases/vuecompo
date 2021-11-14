<template>
  <thead>
    <tr>
      <th class="zpl-table-header">
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
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
