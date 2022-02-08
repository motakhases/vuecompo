<template>
  <div class="zpl-filter-amount">
    <Dropdown
      v-model="amountType"
      :options="options"
      placeholder="بازه مبلغ"
      class="dropdown"
    />
    <Textfield
      v-if="amountType !== 'بازه مبلغ'"
      v-model="model"
      type="number"
      separator="comma"
      unit="ریال"
    />
    {{ amountType }}
    <div
      v-if="amountType === 'بازه مبلغ'"
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
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterAmount extends Mixins(Logic) {}
</script>
