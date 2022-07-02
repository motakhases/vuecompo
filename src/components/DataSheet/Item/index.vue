<template>
  <div :class="['zpl-ds-item', spans, { row }]">
    <span class="zpl-ds-item-title" v-if="title">
      {{ title }}
    </span>
    <span :class="['truncate', { 'text-left' : leftAlign && row } ]">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
