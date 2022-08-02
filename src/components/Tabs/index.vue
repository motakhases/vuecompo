<template>
  <div>
    <ul :class="['zpl-tabs', { 'full-tabs': fillContainer }]">
      <template v-for="(tab, index) in tabs">
        <li
          v-if="tab.title"
          :key="tab.title"
          :class="['tab', { active: index == selectedIndex }]"
          @click="selectTab(index)"
        >
          <Skeleton type="body" class="w-1/2 min-w-[55px]" v-if="loading" />
          <span v-else>
            {{ tab.title }}
          </span>
          <NotificationBadge v-if="tab.warning" />
        </li>
      </template>
    </ul>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
