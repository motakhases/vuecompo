<template>
  <button
    class="zpl-terminal-item"
    @click="$emit('terminalClick', terminalConcatedData)"
  >
    <Thumbnail :icon="icon" :img="img" :alt="alt" />
    <div class="zpl-terminal-item-header">
      <div class="zpl-terminal-item-title">
        {{ title }}
      </div>
      <div class="zpl-terminal-item-link">
        {{ link }}
      </div>
      <div class="flex gap-sm items-center mt-sm">
        <Status :type="state" :text="stateText(state)" />
        <div class="zpl-terminal-item-pin" v-if="pinned">
          <Icon name="PinFill" />
        </div>
      </div>
      <div v-if="active === true" class="zpl-terminal-item-active">
        <Icon name="tickSmall" />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
