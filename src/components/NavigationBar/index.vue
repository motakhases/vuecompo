<template>
  <div>
    <nav :class="['zpl-nav-bar-container', { 'show': isShow }]">
      <!-- Logo -->
      <div class="zpl-nav-bar-logo">
        <Logo
          name="zarinpal"
          type="logo"
          language="fa"
          size="medium"
        />
      </div>

      <!-- Terminals -->
      <SwitchTerminalPopover
        :terminals="terminals"
        :active-terminal="activeTerminal"
        v-on="$listeners"
      />

      <!-- Nav item links -->
      <div class="zpl-nav-bar-content">
        <ul
          v-if="navItems.length"
          class="zpl-nav-bar-list"
        >
          <NavItem
            v-for="(link, index) in navItems"
            :key="index"
            :active="link.active"
            :link="link.link"
            :title="link.title"
            :icon="link.icon"
            :badge="link.badge"
            :premium-badge="link.premiumBadge"
            :toggle="toggle"
            :isShow="isShow"
            :subMenu="link.subMenu"
            :divider="link.divider"
          />
        </ul>
      </div>
    </nav>

    <div
      :class="['zpl-nav-overlay', { 'show': isShow }]"
      @click="toggle"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
