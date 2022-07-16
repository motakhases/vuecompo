<template>
  <div :class="['zpl-avatar-upload', size]">
    <Thumbnail
      icon="terminal"
      size="large"
      :img="img ? img : null"
    />
    <Dropdown :list="dropList" width="200px" v-if="img">
      <template slot="button">
        <button class="zpl-avatar-upload-button loading">
          <div v-if="loading" class="zpl-button-loading">
            <div class="zpl-button-loading-1" />
            <div class="zpl-button-loading-2" />
          </div>
          <Icon v-else name="PenEditSingle" />
        </button>
      </template>
    </Dropdown>

    <vue2Dropzone
      :class="[
        'zpl-none-dropzone',
        !img ? '' : 'hidden',
      ]"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      ref="dropzoneRef"
      @vdropzone-thumbnail="fetchInitialData"
      @vdropzone-error="error"
      @vdropzone-file-added="added"
      id="dropzone"
    >
      <button class="zpl-avatar-upload-button">
        <Icon name="Cloud" />
      </button>
    </vue2Dropzone>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
