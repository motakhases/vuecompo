<template>
  <div class="zpl-dropzone" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <Button
      text="انتخاب فایل..."
      beforeIcon="cloud"
      type="neutral"
      size="medium"
      @click.native="chooseImage"
    />
    <span class="zpl-dropzone-text">یا فایل را در این قسمت رها کنید</span>
    <input
      type="file"
      ref="files"
      @change="upload"
      multiple
      :accept="acceptFormat"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
