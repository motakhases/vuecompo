<template>
  <li class="zpl-nav-item" @click="toggleMobileHandler">
    <Tooltip
      :text="title"
      position="left"
      space="largeSpace"
      size="large"
      indicator
    >
      <router-link :to="link" class="zpl-nav-item-link">
        <Icon :name="icon" />
        <span class="zpl-nav-item-title">
          {{ title }}
        </span>
        <NavBadge v-if="badge" :text="badge" />
        <Icon v-if="subMenu && !showSub" name="AngleDown" />
      </router-link>
    </Tooltip>
    <ul v-if="subMenu">
      <li
        v-for="(link, index) in subMenu"
        :key="index"
        :active="link.active"
        :toggle="toggle"
      >
        <router-link :to="link.link" class="zpl-nav-item-link">
          <span class="zpl-nav-item-title">
            {{ link.title }}
          </span>
          <NavBadge v-if="link.badge" :text="link.badge" />
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
