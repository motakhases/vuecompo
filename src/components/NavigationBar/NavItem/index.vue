<template>
  <li :class="['zpl-nav-item', isFocused ? 'isFocused' : '']" draggable="true" @keyup="onKeyup" @keydown.stop.prevent>
    <span v-if="divider" class="divider" />
    <Tooltip :text="title" position="left" space="largeSpace" size="large" :hideTooltip="!isCollapsed" v-else>
      <div
        :class="['zpl-nav-item-menu', showSub || active ? 'show-sub' : 'hide-sub']"
        v-if="subMenu"
        @click="toggleSub"
      >
        <div :class="['zpl-nav-item-link', subMenuActive ? 'subMenuActive' : '']">
          <Icon :name="icon" />
          <span class="zpl-nav-item-title">
            {{ title }}
          </span>
          <NotificationBadge v-if="findBadge(subMenu)" />

          <Icon class="arrow-icon" v-if="showSub" name="AngleUp" />
          <Icon class="arrow-icon" v-else name="AngleDown" />
        </div>
        <ul @click.stop="" :class="[showSub || active ? '' : 'hidden']" ref="subMenu">
          <li v-for="(link, index) in subMenu" :key="index">
            <router-link :to="link.link" class="zpl-nav-item-sub" tabindex="-1">
              <span class="zpl-nav-item-title">
                {{ link.title }}
              </span>
              <NotificationBadge v-if="link.badge" :text="link.badge" />
              <PremiumBadge v-if="link.premiumBadge" />
            </router-link>
          </li>
        </ul>
      </div>
      <router-link v-if="link" :to="link" class="zpl-nav-item-link" tabindex="-1">
        <Icon :name="icon" />
        <span class="zpl-nav-item-title">
          {{ title }}
        </span>
        <NotificationBadge v-if="badge" :text="badge" />
        <PremiumBadge v-if="premiumBadge" :isCollapsed="isCollapsed" />
      </router-link>
    </Tooltip>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
