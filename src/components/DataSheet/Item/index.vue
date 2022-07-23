<template>
  <div :class="['zpl-ds-item', spans, { row }]">
    <!-- loading -->
    <div
      :class="['flex w-full gap-lg', row ? 'flex-row' : 'flex-col']"
      v-if="loading"
    >
      <Skeleton type="body" :class="[row ? 'w-1/3' : 'w-1/2']" />
      <Skeleton
        type="body"
        :class="[row ? (leftAlign ? 'mr-auto w-1/2' : 'w-1/2') : 'w-full']"
      />
    </div>
    <!-- content -->
    <div v-else :class="['flex w-full gap-xs', row ? 'flex-row' : 'flex-col']">
      <span class="zpl-ds-item-title" v-if="title">
        {{ title }}
      </span>
      <span
        :class="[
          'truncate',
          { 'text-left flex justify-end': leftAlign && row },
        ]"
      >
        <slot />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
