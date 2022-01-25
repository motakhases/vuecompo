<template>
  <div class="zpl-topbar-container">
    <div class="zpl-topbar-right-side">
      <Button
        icon="menuBurger"
        type="tertiary"
        @click.native="$emit('toggleMenu')"
      />
      <!-- <Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        /> -->
      <div class="zpl-topbar-logo">
        <Logo
          size="medium"
          name="zarinpal"
          type="logo"
          language="fa"
        />
      </div>
      <div class="zpl-topbar-terminal-btn">
        <Button
          after-icon="AngleDown"
          type="tertiary"
          text="عنوان درگاه"
          @click.native="toggleTerminalList"
        />
      </div>
    </div>
    <div class="zpl-topbar-left-side">
      <div
        class="zpl-topbar-question-btn"
      >
        <Button
          icon="questionCircle"
          type="tertiary"
        />
      </div>
      <Notification
        badge="99"
        @click.native="$emit('showNotifs')"
      />
      <UserProfile
        :show-profile-box="showProfileBox"
        @click.native="showProfileBox=!showProfileBox"
      />
    </div>
    <TerminalList
      :terminals="terminals"
      :is-open="showTerminalList"
      :toggle="toggleTerminalList"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
