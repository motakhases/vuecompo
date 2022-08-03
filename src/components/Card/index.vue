<template>
  <div class="zpl-card">
    <!-- Header -->
    <div class="zpl-card-head">
      <h4 class="zpl-card-head-title" v-if="title && !loading">
        {{ title }}
      </h4>
      <Skeleton type="heading" class="w-1/5" v-if="loading && title" />

      <div class="zpl-card-actions">
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
import Vue from "vue";
import logic from "./logic";
import "./style.scss";

export default Vue.extend({ mixins: [logic] });
</script>
