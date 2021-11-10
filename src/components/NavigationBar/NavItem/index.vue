<template>
  <li class="zpl-nav-item">
    <Tooltip
      :text="title"
      position="right"
      space="largeSpace"
      size="large"
      indicator
    >
      <router-link
        :to="link"
        :class="['zpl-nav-item-link', { active }]"
      >
        <Icon :name="icon" />
        <span class="zpl-nav-item-title">
          {{ title }}
        </span>
        <NavBadge v-if="badge">
          {{ badge }}
        </NavBadge>
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
