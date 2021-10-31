<template>
  <router-link :to="link">
    <div class="zpl-nav-overview">
      <Thumbnail icon="chartSquare" />
      <div class="zpl-nav-overview-title">
        <slot />
      </div>
      <div
        v-if="active"
        class="zpl-nav-overview-active"
      >
        <Icon name="tickSmall" />
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
