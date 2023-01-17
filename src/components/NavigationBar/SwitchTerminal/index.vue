<template>
  <a :to="link" class="zpl-nav-terminal-container">
    <div :class="['zpl-nav-terminal', isFocused ? 'isFocused' : '']">
      <Thumbnail :icon="icon" :img="img" :alt="alt" />
      <div class="zpl-nav-terminal-header">
        <div class="zpl-nav-terminal-box">
          <div class="zpl-nav-terminal-title">
            {{ title }}
          </div>
          <div class="zpl-nav-terminal-link">
            {{ link }}
          </div>
        </div>
        <Icon name="AngleLeft" class="zpl-nav-terminal-arrow" />
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
