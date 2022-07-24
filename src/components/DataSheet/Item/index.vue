<template>
  <div :class="['zpl-ds-item', spans, { row }]">
    <!-- loading -->
    <div
      :class="['flex w-full gap-lg', row ? 'flex-row' : 'flex-col']"
      v-if="loading"
    >
      <div :class="[ row ? 'flex-1' : null]">
        <Skeleton type="body" class="w-[64px]" />
      </div>
      <div :class="[ row ? 'flex-1' : null]">
        <Skeleton
          type="body"
          :class="[
            'w-[200px]',
            row ? (leftAlign ? 'mr-auto' : null) : null,
          ]"
        />
      </div>
    </div>
    <!-- content -->
    <div v-else :class="['flex w-full gap-xs', row ? 'flex-row' : 'flex-col']">
      <span class="zpl-ds-item-title" v-if="title">
        {{ title }}
      </span>
      <span
        :class="[
          'truncate flex-1',
          { 'text-left flex justify-end': leftAlign && row },
        ]"
      >
        <slot />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Logic from "./logic";

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
