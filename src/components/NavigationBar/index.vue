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
    <nav class="zpl-nav-bar-container">
      <slot name="popover" />
      <div :class="['zpl-nav-bar-menu', { toggle } ]">
        <slot />
        <div class="zpl-nav-bar-content">
          <ul class="zpl-nav-bar-list">
            <slot name="firstList" />
          </ul>
          <ul class="zpl-nav-bar-list">
            <slot name="secondList" />
          </ul>
        </div>
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
