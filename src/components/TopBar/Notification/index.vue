<template>
  <div class="zpl-topbar-navigation">
    <Icon
      name="notification"
      class="zpl-topbar-navigation-icon"
    />
    <NotificationBadge
      numeric="true"
      class="zpl-topbar-navigation-badge"
    >
      {{ badge }}
    </NotificationBadge>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
