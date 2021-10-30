<template>
  <router-link :to="link">
    <div class="zpl-nav-terminal-item">
      <Thumbnail>
        <Icon :name="icon" />
      </Thumbnail>
      <div class="zpl-nav-terminal-header">
        <div class="zpl-nav-terminal-title">
          {{ title }}
        </div>
        <div class="zpl-nav-terminal-link">
          {{ link }}
        </div>
        <Icon name="angleLeft" />
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
