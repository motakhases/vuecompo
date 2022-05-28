<template>
  <div class="zpl-upload">
    <div class="zpl-upload-title" v-if="title">
      {{ title }}
    </div>
    <ul
      class="zpl-upload-restriction"
      v-if="restrictionList && uploadedList.length < maxFiles">
      <li v-for="(item, index) in restrictionList" :key="index">{{ item }}</li>
    </ul>
    <slot />
    <vue2Dropzone
      :class="[
        dropzone ? 'zpl-dropzone' : 'zpl-none-dropzone',
        disabled ? 'disabled': null,
        uploadedList.length >= maxFiles ? 'hidden' : 'null',
      ]"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      ref="dropzoneRef"
      @vdropzone-thumbnail="fetchInitialData"
      @vdropzone-upload-progress="fileUploadProgress"
      @vdropzone-success="successUploaded"
      @vdropzone-error='error'
      id="dropzone"
    >
      <Button
        :text="$t('product.add.select_file')"
        beforeIcon="cloud"
        type="neutral"
        size="medium"
        :disabled="disabled"
      />
      <span class="zpl-dropzone-text" v-if="dropzone">
        {{$t('product.add.drag_image')}}
      </span>
    </vue2Dropzone>
    <UploadedFile
      :removeFileHandler="removeFileHandler"
      :uploadedList="uploadedList"
      :addFileManually="addFileManually"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
