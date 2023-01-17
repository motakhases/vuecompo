<template>
  <div @keyup="onKeyup" @keydown="onKeyDown" tabindex="1">
    <nav :class="['zpl-nav-bar-container', { 'show':isVisible||isToggle,'isCollapsed': isCollapsed,'isDrawer':isDrawer,'isFixed':isFixed }]">
      <!-- Logo -->
      <div style="display: flex;flex-direction: row;">
        <Button
          v-if="menuBurger==='navbar'"
          icon="menuBurger"
          type="tertiary"
          size="medium"
          @click.native="$emit('toggleMenu')"
          class="mr-[8px] mt-[8px]"
          style="margin-bottom: 16px;"
        />

        <div v-if="zplLogo==='navbar'" :class="['zpl-nav-bar-logo']">
          <Logo
            name="zarinpal"
            type="logo"
            language="fa"
            size="medium"
            style="padding: 16px 8px;"
          />
        </div>
      </div>

      <div v-if="iBefIssue" class="hidden">
        iBefIssue
      </div>
      <!-- Terminals -->
      <SwitchTerminalPopover
        v-if="showSwitch"
        :terminals="terminals"
        :active-terminal="activeTerminal"
        v-on="$listeners"
        ref="switchTerminalPopover"
      />
      <div v-if="iAftIssue" class="hidden">
        iAftIssue
      </div>

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
            :toggleMenu="toggleMenu"
            :isCollapsed="isCollapsed"
            :isToggle="isToggle"
            :subMenu="link.subMenu"
            :divider="link.divider"
            ref="navItem"
          />
        </ul>
      </div>
    </nav>

    <div
      :class="['zpl-nav-overlay', { 'isDrawer': isDrawer  }]"
      @click="toggleMenu"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
