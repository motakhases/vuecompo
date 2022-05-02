<template>
  <div class="zpl-dropzone">
    <Button
      text="انتخاب فایل..."
      beforeIcon="cloud"
      type="neutral"
      size="medium"
    />
    <span class="zpl-dropzone-text">یا فایل را در این قسمت رها کنید</span>
    <input type="file" ref="files" @change="onInputChange" multiple  />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
