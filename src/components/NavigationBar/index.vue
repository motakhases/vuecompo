<template>
  <nav class="zpl-nav-bar-container">
    <div :class="['zpl-nav-bar-menu', { toggle }]">
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
      />

      <!-- Nav item links -->
      <div class="zpl-nav-bar-content">
        <ul
          v-if="aboveLinks.length"
          class="zpl-nav-bar-list has-border"
        >
          <NavItem
            v-for="(link, index) in aboveLinks"
            :key="index"
            :active="link.active"
            :link="link.link"
            :title="link.title"
            :icon="link.icon"
            :badge="link.badge"
          />
        </ul>
        <ul
          v-if="belowLinks && belowLinks.length"
          class="zpl-nav-bar-list"
        >
          <NavItem
            v-for="(link, index) in belowLinks"
            :key="index"
            :active="link.active"
            :link="link.link"
            :title="link.title"
            :icon="link.icon"
            :badge="link.badge"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
