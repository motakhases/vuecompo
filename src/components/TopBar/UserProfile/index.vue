<template>
  <Dropdown :list="profileList" width="256px">
    <template slot="button">
      <button class="zpl-topbar-profile">
        <Avatar size="small" />
      </button>
    </template>
    <template slot="header">
      <div class="zpl-topbar-profile-header">
        <div class="zpl-topbar-profile-name">
          {{ username }}
          <Icon v-if="userPremium" name="Premium" />
        </div>
        <div class="zpl-topbar-profile-phone">{{ userPhone }}</div>
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
