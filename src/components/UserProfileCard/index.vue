<template>
  <div class="rtl">
    <div class="zpl-user-profile-card">
      <div class="zpl-user-profile-card-header">
        <slot name="header" />
      </div>
      <div class="zpl-user-profile-card-name">
        <slot name="fullname" />
      </div>
      <div class="zpl-user-profile-card-level">
        <slot name="userLevel" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
