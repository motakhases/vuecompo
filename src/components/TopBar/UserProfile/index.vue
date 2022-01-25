<template>
  <div class="zpl-user-profile ">
    <Button
      icon="profile"
      type="tertiary"
    />
    <div
      v-if="showProfileBox"
      class="zpl-user-profile-box"
    >
      <ul class="zpl-profile-list">
        <li class="zpl-profile-item">
          <Icon
            class="list-icons"
            name="UserProfileSquare"
          />
          <span class="list-text">تنظیمات حساب</span>
        </li>
        <li class="zpl-profile-item">
          <Icon
            class="list-icons"
            name="NightModeCircle"
          />
          <span class="list-text">حالت تیره</span>
        </li>
        <li class="zpl-profile-item">
          <Icon
            class="list-icons"
            name="ExitLogOut"
          />
          <span class="list-text">خروج</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
