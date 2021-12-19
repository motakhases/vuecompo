<template>
  <div class="zpl-filter-amount">
    <Dropdown
      v-model="amountType"
      :options="options"
      placeholder="بازه تاریخ"
      class="dropdown"
    />
    <Textfield
      v-if="amountType !== 'بازه مبلغ'"
      v-model="model"
      type="number"
      separator="comma"
      unit="ریال"
    />
    <div
      v-if="amountType === 'بازه مبلغ'"
      class="range-box"
    >
      <div class="range-input">
        <label>از</label>
        <Textfield
          v-model="model[0]"
          type="number"
          separator="comma"
          unit="ریال"
        />
      </div>
      <div class="range-input">
        <label>تا</label>
        <Textfield
          v-model="model[1]"
          type="number"
          separator="comma"
          unit="ریال"
        />
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
