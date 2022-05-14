<template>
  <div class="zpl-upload">
    <div class="zpl-upload-title" v-if="title">
      {{ title }}
    </div>
    <ul class="zpl-upload-restriction" v-if="restrictionList">
      <li v-for="(item, index) in restrictionList" :key="index">{{ item }}</li>
    </ul>
    <slot />
    <UploadedFile
      v-for="(item, index) in uploadedList"
      :key="index"
      :file="item"
    />
    <vue2Dropzone
      class="zpl-dropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      ref="dropzoneRef"
      @vdropzone-file-added="getFiles"
            @vdropzone-sending="uploadProgress"
@vdropzone-thumbnail="images"
@vdropzone-upload-progress="progress"
       id="dropzone"
    >
      <Button
        text="انتخاب فایل..."
        beforeIcon="cloud"
        type="neutral"
        size="medium"
        @click.native="chooseImage"
      />
      <span class="zpl-dropzone-text">یا فایل را در این قسمت رها کنید</span>
    </vue2Dropzone>
    <div @click="getFiles">files</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
