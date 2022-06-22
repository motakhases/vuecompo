<template>
  <div class="zpl-card">
    <!-- Header -->
    <div class="zpl-card-head">
      <h4 class="zpl-card-head-title" v-if="title">
        {{ title }}
      </h4>
      <div class="zpl-card-actions">
        <slot name="actions" />
      </div>
    </div>
    <!-- body -->
    <div class="zpl-card-content" v-if="hasContent">
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
