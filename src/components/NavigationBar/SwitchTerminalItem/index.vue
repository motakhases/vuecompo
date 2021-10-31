<template>
  <router-link :to="link">
    <div class="zpl-nav-terminal-item">
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
        <StoreStatus :state="state">
          {{ stateText }}
        </StoreStatus>
        <div
          v-if="active"
          class="zpl-nav-terminal-active"
        >
          <Icon name="tickSmall" />
        </div>
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
