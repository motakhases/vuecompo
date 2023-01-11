<template>
  <div class="zpl-share">
    <div class="zpl-share-body">
      <Skeleton v-if="loading" type="body" class="w-[160px] h-[160px]" />
      <div v-else class="_qr-wrapper">
        <img
          :src="qrcode"
          :alt="$t('auth.qr.alt')"
        >
      </div>
      <CopyToClipboard
        :title="$t('common.link')"
        :text="url"
        :loading="loading"
      />
      <CopyToClipboard
        :title="$t('product.show.html_code_label')"
        :text="html"
        :loading="loading"
      />
    </div>
    <div class="zpl-share-footer">
      <Skeleton v-if="loading" type="button" class="w-[200px] h-[48px]"/>
      <Button
        v-else
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
          key-name="telegram"
          :title="title"
          :url="url"
          :loading="loading"
          type="square"
        />
        <Social
          key-name="whatsapp"
          :title="title"
          :url="url"
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
