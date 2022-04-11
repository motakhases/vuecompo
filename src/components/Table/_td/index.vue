<template>
  <td v-if="data" :style="[{ width, minWidth, maxWidth}]">
    <TypeRenderer :data="data" :route-name="routeName" />
  </td>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class Td extends Mixins(Logic) {}
</script>
