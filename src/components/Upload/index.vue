<template>
  <div class="zpl-upload">
    <div class="zpl-upload-title" v-if="title">
      {{ title }}
    </div>
    <ul class="zpl-upload-restriction" v-if="restrictionList">
      <li v-for="(item, index) in restrictionList" :key="index">{{ item }}</li>
    </ul>
    <slot />
    <DropZone :upload="upload" />
    <UploadedFile
      v-for="(item, index) in uploadedList"
      :key="index"
      :file="item"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
