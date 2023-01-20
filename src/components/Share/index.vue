<template>
  <div class="zpl-share">
    <div class="zpl-share-body">
      <Skeleton v-if="qrcode.length && !noQr && loading" type="body" class="w-[160px] h-[160px]" />
      <div v-else-if="qrcode.length && !noQr" class="_qr-wrapper">
        <img :src="qrcode" :alt="$t('auth.qr.alt')" />
      </div>
      <CopyToClipboard v-if="text.length" :title="title" :text="text" :loading="loading" />
      <CopyToClipboard v-if="text2.length" :title="title2" :text="text2" :loading="loading" />
    </div>
    <div class="zpl-share-footer">
      <Skeleton v-if="qrcode.length && !noQr && loading" type="button" class="w-[200px] h-[48px]" />
      <Button
        v-else-if="qrcode.length && !noQr"
        :text="$t('auth.qr.download')"
        type="neutral"
        before-icon="Download"
        size="small"
        :loading="loading"
        @click.native="download(qrcode)"
      />
      <div class="zpl-share-socials">
        <Social v-if="urlTlg.length" typeIcon="telegram" :urlAdr="urlAdrTlg" :loading="loading" typeStyle="square" />
        <Social v-if="urlWApp.length" typeIcon="whatsapp" :urlAdr="urlAdrWApp" :loading="loading" typeStyle="square" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
