<template>
  <div>
    <div class="zpl-progress-label" v-if="title || percentText">
      <span v-if="title">{{ title }}</span>
      <span class="zpl-progress-percent" v-if="percentText"> {{ percent }}% </span>
    </div>
    <div :class="['zpl-progress', size]">
      <div class="zpl-progress-bar determinate" :style="{ width: `${percent}%` }" v-if="type === 'determinate'"></div>
      <div v-if="type === 'indeterminate'" class="zpl-progress-bar indeterminate"></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
