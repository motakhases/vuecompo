<template>
  <div>
    <ul :class="['zpl-tabs', {'full-tabs':fillContainer}]">
      <template v-for="(tab, index) in tabs">
        <li
          v-if="tab.title"
          :key="tab.title"
          :class="['tab', {active:index==selectedIndex}]"
          @click="selectTab(index)"
        >
          <span>
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
