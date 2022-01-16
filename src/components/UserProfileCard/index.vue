<template>
  <div class="zpl-user-profile-card">
    <div class="zpl-user-profile-card-header">
      <AvatarProgressBar
        :type="level"
        :percent="avatarPercent"
        :img="avatarImg"
      />
      <ZarinID
        :id="zarinId"
        :type="level"
      />
    </div>
    <div class="zpl-user-profile-card-name">
      {{ fullname }}
    </div>
    <UserLevel
      :text="levelText"
      :list="labelList"
    />
    <TasksStack
      v-if="taskItems"
      :items="taskItems"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
