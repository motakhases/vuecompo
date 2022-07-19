<template>
  <div class="zpl-clipboard">
    <Loading v-if="loading" />
    <div v-else>
      <!-- Header -->
      <h4 class="zpl-clipboard-title">
        {{ title }}
      </h4>
      <!-- body -->
      <Tooltip
        space="smallSpace"
        :text="copyToClipboardText"
        indicator
        position="topCenter"
      >
        <div class="zpl-clipboard-box">
          <!-- clipboard icon -->
          <div class="zpl-clipboard-icon" @click="copyToClipboardHandler">
            <Icon name="Copy" />
          </div>

          <!-- clipboard text -->
          <div class="zpl-clipboard-text">
            {{ text }}
          </div>
        </div>
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
