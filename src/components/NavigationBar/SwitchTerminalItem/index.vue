<template>
  <a
    :to="link"
    class="zpl-terminal-item"
  >
    <Thumbnail
      :icon="icon"
      :img="img"
      :alt="alt"
    />
    <div class="zpl-terminal-item-header">
      <div class="zpl-terminal-item-title">
        {{ title }}
      </div>
      <div class="zpl-terminal-item-link">
        {{ link }}
      </div>
      <StoreStatus
        :state="state"
        :text="stateText(state)"
      />
      <div
        v-if="active === true"
        class="zpl-terminal-item-active"
      >
        <Icon name="tickSmall" />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
