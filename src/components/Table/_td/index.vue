<template>
  <td :class="[data.type === 'action' ? 'sticky-col' : null]">
    <div>
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
