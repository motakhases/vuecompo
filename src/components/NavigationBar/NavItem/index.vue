<template>
  <li class="zpl-nav-item">
    <Tooltip
      :text="title"
      position="left"
      space="largeSpace"
      size="large"
      indicator
    >
      <a
        :href="link"
        :class="['zpl-nav-item-link', { active }]"
      >
        <Icon :name="icon" />
        <span class="zpl-nav-item-title">
          {{ title }}
        </span>
        <NavBadge
          v-if="badge"
          :text="badge"
        />
      </a>
    </Tooltip>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
