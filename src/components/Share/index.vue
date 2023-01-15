<template>
  <div class="zpl-share">
    <div class="zpl-share-body">
      <Skeleton v-if="loading" type="body" class="w-[160px] h-[160px]" />
      <div v-else-if="qrcode" class="_qr-wrapper">
        <img
          :src="qrcode"
          :alt="$t('auth.qr.alt')"
        >
      </div>
      <CopyToClipboard
        :title="title"
        :text="text"
        :loading="loading"
      />
      <CopyToClipboard
        :title="title2"
        :text="text2"
        :loading="loading"
      />
    </div>
    <div class="zpl-share-footer">
      <Skeleton v-if="loading" type="button" class="w-[200px] h-[48px]"/>
      <Button
        v-else-if="qrcode"
        :text="$t('auth.qr.download')"
        type="neutral"
        before-icon="Download"
        size="small"
        fill
        :loading="loading"
        @click.native="download(qrcode)"
      />
      <div class="zpl-share-socials">
        <Social
          v-if="urlTlg"
          key-name="telegram"
          :url="urlTlg"
          :loading="loading"
          type="square"
        />
        <Social
          v-if="urlWApp"
          key-name="whatsapp"
          :url="urlWApp"
          :loading="loading"
          type="square"
        />
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
