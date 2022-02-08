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
        <div>
          <div class="zpl-nav-terminal-title">
            {{ title }}
          </div>
          <div class="zpl-nav-terminal-link">
            {{ link }}
          </div>
        </div>
        <Icon
          name="AngleLeft"
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
