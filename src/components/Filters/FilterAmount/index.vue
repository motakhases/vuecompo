<template>
  <div class="zpl-filter-amount">
    <Dropdown
      v-model="value"
      :options="options"
      placeholder="بازه تاریخ"
    />
    <TextField
      v-model="amountValue"
      type="number"
      separator="comma"
      unit="ریال"
    />
    {{ amount.GREATER_THAN }}
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
