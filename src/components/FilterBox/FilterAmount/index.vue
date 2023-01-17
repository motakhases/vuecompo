<template>
  <div class="zpl-filter-amount">
    <Select v-model="amountType" :options="options" :placeholder="$t('common.export.amount_range')" class="dropdown" />
    <div v-if="amountType">
      <div v-if="amountType === types.PRICE_RANGE">
        <div class="flex gap-md items-center">
          <label>{{ $t('common.from') }}</label>
          <Textfield v-model="model[0]" type="number" separator="comma" :unit="$t('common.rial')" class="flex-1" />
        </div>

        <div class="flex gap-md items-center mt-md">
          <label>{{ $t('common.to') }}</label>
          <Textfield v-model="model[1]" type="number" separator="comma" :unit="$t('common.rial')" class="flex-1" />
        </div>
      </div>
      <Textfield v-else v-model="model" type="number" separator="comma" :unit="$t('common.rial')" />
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
