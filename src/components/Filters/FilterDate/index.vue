<template>
  <div class="zpl-filter-actions">
    <Dropdown
      v-model="value"
      :options="options"
      placeholder="بازه تاریخ"
    />
    <slot />
    <!-- {{ value }} -->
    {{ selectedType }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
