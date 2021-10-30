<template>
  <div class="rtl">
    <nav
      class="zpl-nav-bar-icon"
      @click="toggleMenu"
    >
      <Icon
        name="menuBurger"
      />
    </nav>
    <nav :class="['zpl-nav-bar-menu', { toggle }]">
      <router-link to="/">
        dd
      </router-link>
      <div class="zpl-nav-bar-header">
        <div class="zpl-nav-bar-terminal-icon">
          <Icon name="terminal" />
        </div>
        <div class="zpl-nav-bar-header-title">
          <div class="zpl-nav-bar-title">
            title
          </div>
          <div class="zpl-nav-bar-link">
            link
          </div>
        </div>
        <Icon
          name="angleLeft"
          class="zpl-nav-bar-arrow"
        />
        <div class="zpl-nav-bar-popover">
          <ul class="zpl-nav-bar-popover-list" />
        </div>
      </div>
      <div class="zpl-nav-bar-content">
        <slot />
        <ul class="zpl-nav-bar-list">
          <slot name="firstList" />
        </ul>
        <ul class="zpl-nav-bar-list">
          <slot name="secondList" />
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
