<template>
  <div>
    <div ref="button">
      <slot name="button" />
    </div>
    <div ref="menu">
      <div
        v-if="toggle"
        :class="[
          'zpl-dropdown',
          width ? `w-[${width}]` : null,
          height ? `w-[${height}]` : null,
        ]"
        :style="style"
      >
        <slot name="heeader" />
        <ul class="zpl-dropdown-list">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="[
              'zpl-dropdown-item',
              item.color ? `text-${item.color}` : null,
            ]"
            @click="item.action()"
          >
            <Icon :name="item.icon" class="zpl-dropdown-icon" />
            {{ item.title }}
          </li>
        </ul>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import logic from "./logic";
import "./style.scss";

export default Vue.extend({ mixins: [logic] });
</script>
