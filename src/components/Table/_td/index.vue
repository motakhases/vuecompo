<template>
  <td>
    <div v-if="data">
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
