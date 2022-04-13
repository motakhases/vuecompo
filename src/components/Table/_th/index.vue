<template>
  <th
    :style="[{ width, minWidth, maxWidth}]"
  >
    <div
      :class="{ 'can-sort': canSort }"
      @click="sort"
    >
      {{ title }}
      <Label
        v-if="label"
        size="small"
        type="neutral"
        :text="label"
      />
      <Icon
        v-if="canSort"
        class="sort-icon"
        :name="sortIcon"
      />
    </div>
  </th>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class Th extends Mixins(Logic) {}
</script>
