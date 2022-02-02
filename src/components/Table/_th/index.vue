<template>
  <th>
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
        :name="sortIcons[sortOrder]"
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

// TODO: Sorting icons
// TODO: Loading
