<template>
  <div>
    <div ref="button">
      <slot name="button" />
    </div>
    <div ref="menu">
      <div
        v-if="toggle"
        class="zpl-dropdown"
        :style="[style, { width, maxHeight }]"
        dir="rtl"
      >
        <slot name="heeader" />
        <ul class="zpl-dropdown-list">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="[
              'zpl-dropdown-item',
              item.color ? finalColor(item.color) : null,
            ]"
            @click="item.action(customPayload)"
          >
            <Icon
              :name="item.icon"
              class="zpl-dropdown-icon"
            />
            {{ item.title }}
          </li>
        </ul>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
