<template>
  <a
    :to="link"
  >
    <div
      class="zpl-nav-terminal"
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
        <Icon
          name="angleLeft"
          class="zpl-nav-terminal-arrow"
        />
      </div>
      <slot />
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
