<template>
  <div class="zpl-card">
    <!-- Header -->
    <div class="zpl-card-head" v-if="title">
      <Skeleton type="heading" class="w-1/5" v-if="loading" />
      <h4 class="zpl-card-head-title" v-if="title && !loading">
        {{ title }}
      </h4>
      <div class="zpl-card-actions">
              <Skeleton type="button" class="w-1/3" v-if="loading" />
        <slot name="actions" v-else />
      </div>
    </div>
    <!-- body -->
    <div :class="{'zpl-card-content': title}" v-if="hasContent">
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
