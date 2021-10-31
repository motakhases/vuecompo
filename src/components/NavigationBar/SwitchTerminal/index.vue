<template>
  <router-link
    :to="link"
  >
    {{ toggle }}
    <div
      class="zpl-nav-terminal"
      @mouseenter="toggle"
    >
      <Thumbnail
        :icon="icon"
        :img="img"
        :alt="alt"
      />
      <div class="zpl-nav-terminal-header">
        <div class="zpl-nav-terminal-title">
          {{ title }}
        </div>
        <div class="zpl-nav-terminal-link">
          {{ link }}
        </div>
      </div>
      <Icon name="angleLeft" />
      <slot />
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
