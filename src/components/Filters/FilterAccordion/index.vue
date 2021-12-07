<template>
  <div
    class="zpl-filter-acc"
  >
    <FilterToggle
      text="text"
      :change="check"
      val=""
      name="d"
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
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
