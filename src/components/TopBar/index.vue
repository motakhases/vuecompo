<template>
  <div class="zpl-topbar">
    <div v-if="centerLogo" class="zpl-topbar-center">
      <div class="zpl-topbar-logo">
        <Logo size="medium" name="zarinpal" type="logo" language="fa" />
      </div>
    </div>
    <div class="zpl-topbar-container" v-else>
      <div class="zpl-topbar-right-side">
        <Button v-if="hasMenu" icon="menuBurger" type="tertiary" size="medium" @click.native="$emit('toggleMenu')" />
        <!-- <Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        /> -->
        <div class="zpl-topbar-logo">
          <Logo size="medium" name="zarinpal" type="logo" language="fa" />
        </div>
        <div class="zpl-topbar-terminal-btn">
          <Button
            after-icon="AngleDown"
            type="tertiary"
            size="medium"
            :text="activeTerminal"
            @click.native="toggleTerminalList"
          />
        </div>
      </div>
      <div class="zpl-topbar-left-side" v-if="titleTooltip">
        <div class="zpl-topbar-ticket-btn">
          <Tooltip :text="titleTooltip.ticket" position="bottomCenter" space="largeSpace" size="large">
            <Button icon="ChatMessage" type="tertiary" size="medium" @click.native="$emit('showTickets')" />
          </Tooltip>
          <NotificationBadge v-if="ticketingBadge" class="zpl-topbar-navigation-badge" :text="ticketingBadge" />
        </div>
        <Tooltip :text="titleTooltip.notification" position="bottomCenter" space="largeSpace" size="large">
          <Notification :badge="notificationBadge" @click.native="$emit('showNotifs')" />
        </Tooltip>
        <Tooltip :text="titleTooltip.userProfile" position="bottomCenter" space="largeSpace" size="large">
          <UserProfile
            :profileList="profileList"
            :username="username"
            :userPhone="userPhone"
            :userPremium="userPremium"
          />
        </Tooltip>
      </div>
      <TerminalList
        v-if="hasMenu"
        :terminals="terminals"
        :is-open="showTerminalList"
        :toggle="toggleTerminalList"
        @terminalClick="terminalClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
