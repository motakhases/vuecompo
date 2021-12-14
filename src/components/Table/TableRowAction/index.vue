<template>
  <td class="zpl-table-action-container">
    <div class="zpl-table-action">
      <Icon name="dotsMenu" />
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
