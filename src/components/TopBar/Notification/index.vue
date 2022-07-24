<template>
  <div class="zpl-topbar-navigation">
    <Button
      icon="notification"
      type="tertiary"
      size="medium"
    />
    <NotificationBadge
      class="zpl-topbar-navigation-badge"
      :text="badge"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
