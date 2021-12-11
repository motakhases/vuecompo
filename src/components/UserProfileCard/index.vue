<template>
  <div
    class="zpl-user-profile-card"
    dir="rtl"
  >
    <div class="zpl-user-profile-card-header">
      <AvatarProgressBar
        :type="avatarType"
        :size="avatarSize"
        :percent="avatarPercent"
        :img="avatarImg"
      />
      <ZarinID
        :id="zarinId"
        :type="zarinIdType"
      />
    </div>
    <div class="zpl-user-profile-card-name">
      {{ fullname }}
    </div>
    <div class="zpl-user-profile-card-level">
      <UserLevel
        :text="levelText"
        :list="labelList"
      />
    </div>
    <TasksStack :items="taskItems" />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
