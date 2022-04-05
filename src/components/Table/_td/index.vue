<template>
  <td 
    :class="{ 'cursor-pointer': data.click }"
    @click="data.click ? data.click() : null"
  >
      <TypeRenderer v-if="data" :data="data" />
  </td>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class Td extends Mixins(Logic) {}
</script>
