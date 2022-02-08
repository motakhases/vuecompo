<template>
  <div class="zpl-filters">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Indicator extends Mixins(Logic) {}
</script>
