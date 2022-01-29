<template>
  <th>
    <div>
      {{ title }}
      <Label
        v-if="label"
        size="small"
        type="neutral"
        :text="label"
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
// TODO: Checkbox
// TODO: Loading
