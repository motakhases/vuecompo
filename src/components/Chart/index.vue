<template>
  <VueApexCharts
    :class="[
      { 'month-sparate-ticks': xType === 'month' },
      { 'week-sparate-ticks': xType === 'week' },
      { 'day-sparate-ticks': xType === 'day' },
      { 'no-legend': hideLegend },
    ]"
    :type="type"
    :options="options"
    :series="series"
    :height="height"
    ref="Chart"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Chart extends Mixins(Logic) {}
</script>
