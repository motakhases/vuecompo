<template>
  <div class="zpl-card">
    <!-- loading -->
    <Loading :actions="!!$slots.actions" v-if="loading" :title="!!title" />
    <!-- Header -->
    <div class="zpl-card-head" v-if="title && !loading">
      <h4 class="zpl-card-head-title">
        {{ title }}
      </h4>
      <div class="zpl-card-actions" v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <!-- body -->
    <div :class="{ 'zpl-card-content': title }" v-if="hasContent">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
