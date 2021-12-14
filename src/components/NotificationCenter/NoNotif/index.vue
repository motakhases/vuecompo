<template>
  <div class="no-notif">
    <div class="bg-empty-box" />
    <div class="content">
      <p class="title">
        {{ `${notifType} وجود ندارد` }}
      </p>
      <p class="desc">
        {{ `هنوز ${notifType} دریافت نکرده‌اید` }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
