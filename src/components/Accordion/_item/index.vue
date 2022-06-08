<template>
  <div class="zpl-accordion-item">
    <button @click="toggle">
      {{ title }}

      <Icon class="icon" :name="isOpen ? 'minus' : 'plus'" />
    </button>

    <div v-show="isOpen" class="_content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
