<template>
  <div class="zpl-share">
    <Tabs>
      <!-- Sharing methods -->
      <tab title="لینک">
        <div class="zpl-share-tab">
          <!-- Social networks sharing -->
          <div class="zpl-share-socials">
            <Social
              key-name="telegram"
              name="تلگرام"
              :url="url"
            />
            <Social
              key-name="whatsapp"
              name="واتساپ"
              :url="url"
            />
            <Social
              key-name="instagram"
              name="اینستاگرام"
              :url="url"
            />
          </div>

          <!-- Link -->
          <TextField
            v-model="url"
            label="لینک"
            readonly
            copyable
            ltr
          />

          <!-- Html code -->
          <TextField
            v-if="html"
            v-model="html"
            label="کد HTML"
            readonly
            copyable
            ltr
          />
        </div>
      </tab>

      <!-- QR Code sharing method -->
      <tab
        v-if="qrcode"
        title="QR Code"
      >
        <div class="zpl-share-tab">
          <div class="_qr-wrapper">
            <img
              :src="qrcode"
              alt="qrCode"
            >
          </div>

          <Button
            text="دانلود QR Code"
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
