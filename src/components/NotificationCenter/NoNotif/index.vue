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

export default Vue.extend({
  name: 'NoNotif',
  props: {
    notifType: {
      type: String,
      default: 'اعلانی',
    },
  },
});
</script>
