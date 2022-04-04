<template>
  <td :class="[
      data.type === 'action' ? 'sticky-col' : null,
      data.click ? 'cursor-pointer' : null,
    ]">
    <div @click="data.click ? data.click() : null">
      <TypeRenderer :data="data" />
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class Td extends Mixins(Logic) {}
</script>
