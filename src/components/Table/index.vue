<template>
  <div class="rtl over">
    <div class="zpl-table-container">
      <div class="zpl-table-overflow">
        <table :class="['zpl-table', { 'table-fixed':fixed }]">
          <thead>
            <slot name="header" />
          </thead>

          <slot name="body" />
        </table>
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
