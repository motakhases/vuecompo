<template>
  <div class="zpl-filter-acc">
    <div class="zpl-filter-toggle">
      <CheckBox
        v-model="model"
        :text="text"
        :disabled="disabled"
        :name="name"
        :val="val"
        :change="check"
      />
    </div>
    <div
      v-if="isActive"
      class="zpl-filter-status"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterAccordion extends Mixins(Logic) {}
</script>
