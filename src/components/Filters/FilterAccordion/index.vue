<template>
  <div class="zpl-filter-acc">
    <FilterToggle
      v-model="model"
      :text="text"
      :disabled="disabled"
      :name="name"
      :val="val"
      :change="check"
    />
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="isActive"
        class="zpl-filter-status"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterAccordion extends Mixins(Logic) {}
</script>
