<template>
  <div>
    <ul :class="['zpl-tabs', {'full-tabs':fillContainer}]">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="['tab', {active:index==selectedIndex}]"
        @click="selectTab(index)"
      >
        <span>
          {{ tab.title }}
        </span>
        <i
          v-show="tab.warn"
          class="warn-circle"
        />
      </li>
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
