<template>
  <a
    :to="link"
    class="zpl-nav-overview"
  >
    <Thumbnail icon="chartSquare" />
    <div class="zpl-nav-overview-title">
      <slot />
    </div>
    <div
      v-if="active === true"
      class="zpl-nav-overview-active"
    >
      <Icon name="tickSmall" />
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
