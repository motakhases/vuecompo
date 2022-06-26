<template>
  <VueApexCharts
    :class="{ 'five-sparate-ticks': xType !== 'week' }"
    :type="type"
    :options="options"
    :series="series"
    ref="chart"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Chart extends Mixins(Logic) {}
</script>
