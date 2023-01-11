<template>
  <div :class="['zpl-sb-item ', spans, { row, leftAlign, loading }]">
    <!-- loading -->

    <!-- content -->
    <div :class="['zpl-sb-item-cont flex w-full gap-xs', row ? 'flex-row' : 'flex-col']">
      <span class="zpl-sb-item-title" v-if="title">
        {{ title }}
      </span>
      <span :class="['truncate flex-1',{ 'text-left flex justify-end': leftAlign && row }]">
        <slot />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import logic from './logic';

@Component
export default class StatsBlockItem extends Mixins(logic) {}
</script>
