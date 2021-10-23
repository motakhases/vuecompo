<template>
  <div class="rtl">
    <nav class="zpl-nav-bar-icon">
      <Icon name="menuBurger" />
    </nav>
    <nav class="zpl-nav-bar-menu">
      <div class="zpl-nav-bar-header">
        <div class="zpl-nav-bar-terminal-icon">
          <Icon name="profile" />
        </div>
        <div class="zpl-nav-bar-header-title">
          <div class="zpl-nav-bar-title">
            title
          </div>
          <div class="zpl-nav-bar-link">
            link
          </div>
        </div>
        <Icon name="angleDown" />
      </div>
      <div class="zpl-nav-bar-content">
        <ul class="zpl-nav-bar-list">
          <li class="zpl-nav-bar-item">
            <Icon name="tickLarge" />
            <div class="zpl-nav-bar-title">
              لیبل
            </div>
          </li>
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
