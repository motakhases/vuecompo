<template>
  <div>
    <div ref="button">
      <slot name="button" />
    </div>
    <div ref="menu">
      <div v-if="toggle" class="zpl-dropdown" :style="[style, { width, maxHeight }]" dir="rtl">
        <slot name="header" />
        <slot name="body" />

        <ul class="zpl-dropdown-list">
          <li
            v-for="(item, index) in list"
            v-show="item.isShow ? item.isShow(customPayload) : true"
            :key="index"
            :class="[
              'zpl-dropdown-item',
              item.color ? finalColor(item.color) : null,
              { selected: selected ? value === item.title : '' },
            ]"
            @click="item.action(customPayload)"
          >
            <Icon v-if="item.icon" :name="item.icon" class="zpl-dropdown-icon" />
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
