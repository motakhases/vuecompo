<template>
  <div class="zpl-sb-row">
    <div :class="['zpl-sb-row-hidder', columns]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import logic from './logic';

@Component
export default class StatsBlockRow extends Mixins(logic) {}
</script>
