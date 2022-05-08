<template>
  <div>
    <div class="zpl-progress-label" v-if="title || percentText">
      <span v-if="title">{{ title }}</span>
      <span class="zpl-progress-percent" v-if="percentText">
        {{ percentText }}
      </span>
    </div>
    <div :class="['zpl-progress', size]">
      <transition
        v-if="type === 'determinate'"
        appear
        @before-appear="beforeEnter"
        @after-appear="enter"
      >
        <div class="zpl-progress-bar"></div>
      </transition>
      <div
        v-if="type === 'indeterminate'"
        class="zpl-progress-bar indeterminate"
      ></div>
    </div>
  <div class="loading-bar">
    <div class="blue-bar"></div>
  </div>
  </div>
</template>
<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
