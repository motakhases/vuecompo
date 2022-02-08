<template>
  <div class="zpl-ds">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
