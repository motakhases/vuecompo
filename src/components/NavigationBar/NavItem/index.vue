<template>
  <li class="zpl-nav-item" @click="toggleMobileHandler">
    <Tooltip
      :text="title"
      position="left"
      space="largeSpace"
      size="large"
      indicator
    >
      <div
        :class="['zpl-nav-item-menu', showSub ? 'show-sub' : 'hide-sub']"
        v-if="subMenu"
        @click="toggleSub"
      >
        <div class="zpl-nav-item-link">
          <Icon :name="icon" />
          <span class="zpl-nav-item-title">
            {{ title }}
          </span>
          <NotificationBadge v-if="findBadge(subMenu)" />
          <Icon class="arrow-icon" v-if="showSub" name="AngleUp" />
          <Icon class="arrow-icon" v-else name="AngleDown" />
        </div>
        <ul @click.stop="">
          <li
            v-for="(link, index) in subMenu"
            :key="index"
          >
            <router-link :to="link.link" class="zpl-nav-item-sub">
              <span class="zpl-nav-item-title">
                {{ link.title }}
              </span>
              <NotificationBadge v-if="link.badge" :text="link.badge" />
            </router-link>
          </li>
        </ul>
      </div>
      <router-link v-else :to="link" class="zpl-nav-item-link">
        <Icon :name="icon" />
        <span class="zpl-nav-item-title">
          {{ title }}
        </span>
        <NotificationBadge v-if="badge" :text="badge" />
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
