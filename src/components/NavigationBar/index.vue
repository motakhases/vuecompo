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
            :toggle="toggle"
            :isShow="isShow"
            :subMenu="link.subMenu"
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
            :toggle="toggle"
            :isShow="isShow"
            :subMenu="link.subMenu"
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
