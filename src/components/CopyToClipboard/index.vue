<template>
  <div class="zpl-clipboard">
    <Loading v-if="loading" :title="title" />
    <template v-else>
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
        class="!w-full"
        trigger="click"
      >
        <div class="zpl-clipboard-box">
          <!-- clipboard icon -->
          <div class="zpl-clipboard-icon" @click="copyToClipboardHandler">
            <Icon name="Copy" />
          </div>

          <!-- clipboard text -->
          <input class="zpl-clipboard-text" v-model="text">
        </div>
      </Tooltip>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
