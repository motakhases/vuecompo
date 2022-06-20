<template>
  <VueApexCharts
    :type="type"
    :options="options"
    :series="series"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Chart extends Mixins(Logic) {}
</script>
