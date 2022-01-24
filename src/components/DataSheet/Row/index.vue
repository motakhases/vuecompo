<template>
  <div class="zpl-ds-row">
    <div :class="['zpl-ds-row-hidder', columns]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
