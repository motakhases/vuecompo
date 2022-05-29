<template>
  <LineChartGenerator
    :chart-options="options"
    :chart-data="chartData"
    :chart-id="chartId"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Chart extends Mixins(Logic) {}
</script>
