<template>
  <div class="zpl-share-oldv">
    <Tabs :loading="loading" :loadingNumber="2">
      <!-- Sharing methods -->
      <tab :title="$t('common.link')">
        <div class="zpl-share-oldv-tab">
          <!-- Social networks sharing -->
          <div class="zpl-share-oldv-socials">
            <Social
              key-name="telegram"
              :name="$t('common.TELEGRAM')"
              :title="title"
              :url="url"
              :loading="loading"
            />
            <Social
              key-name="whatsapp"
              :name="$t('common.WHATSAPP')"
              :title="title"
              :url="url"
              :loading="loading"
            />
          </div>

          <!-- Link -->
          <TextField
            v-model="url"
            :label="$t('common.link')"
            readonly
            copyable
            ltr
            :loading="loading"
          />
          <!-- Html code -->
          <TextField
            v-model="html"
            :label="$t('product.show.html_code_label')"
            readonly
            copyable
            ltr
            :loading="loading"
          />
        </div>
      </tab>

      <!-- QR Code sharing method -->
      <tab :title="$t('auth.qr.code')">
        <div class="zpl-share-oldv-tab">
          <div class="_qr-wrapper">
            <img
              :src="qrcode"
              :alt="$t('auth.qr.alt')"
            >
          </div>

          <Button
            :text="$t('auth.qr.download')"
            type="neutral"
            before-icon="Download"
            size="large"
            fill
            @click.native="download(qrcode)"
          />
        </div>
      </tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
