<template>
  <div :class="['zpl-segment-group' , { fill } ]">
    <button
      v-for="segment in segments"
      :key="segment.id"
      :class="['zpl-segment-button', selectedTab === segment.id ? 'active' : '' ]"
      @click="selectedTab = segment.id"
    >
      {{ segment.title }}
    </button>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
