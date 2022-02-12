<template>
  <div class="zpl-filter-amount">
    <Dropdown
      v-model="amountType"
      :options="options"
      placeholder="بازه مبلغ"
      class="dropdown"
    />
    <div
      v-if="amountFilter === types.PRICE_RANGE"
      class="range-box"
    >
      <div class="range-input">
        <label>از</label>
        <Textfield
          v-model="range[0]"
          type="number"
          separator="comma"
          unit="ریال"
        />
      </div>
      <div class="range-input">
        <label>تا</label>
        <Textfield
          v-model="range[1]"
          type="number"
          separator="comma"
          unit="ریال"
        />
      </div>
    </div>
    <Textfield
      v-else
      v-model="model"
      type="number"
      separator="comma"
      unit="ریال"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterAmount extends Mixins(Logic) {}
</script>
