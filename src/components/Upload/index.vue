<template>
  <div class="zpl-upload">
    <div class="zpl-upload-title" v-if="title">
      {{title}}
    </div>
    <ul class="zpl-upload-restriction" v-if="restrictionList">
      <li v-for="(item, index) in restrictionList" :key="index">{{ item }}</li>
    </ul>
    <slot />
   <DropZone/>
   <UploadedFile
   status="uploaded"
   image="
   https://dkstatics-public.digikala.com/digikala-products/ed97aae370e4657ac7a82e663e50be30e9b91a28_1597133954.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
   <UploadedFile/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
