<template>
  <button
    :class="['zpl-button', size, type, { fill, icon }]"
    :disabled="disabled"
  >
    <!-- shows if loading is true -->
    <div
      v-if="loading"
      class="zpl-button-loading"
    >
      <div class="zpl-button-loading-1" />
      <div class="zpl-button-loading-2" />
    </div>

    <!-- shows if before icon exists -->
    <Icon
      v-if="beforeIcon && !loading"
      :name="beforeIcon"
      class="zpl-button-icon"
    />

    <!-- shows if before icon exists -->
    <span v-if="!loading && text">
      {{ text }}
    </span>

    <!-- shows if after icon exists -->
    <Icon
      v-if="afterIcon && !loading"
      :name="afterIcon"
      class="zpl-button-icon"
    />
    <!-- shows if icon exists -->

    <Icon
      v-if="icon && !loading"
      :name="icon"
      class="zpl-button-icon"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
