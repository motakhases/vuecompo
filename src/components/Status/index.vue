<template>
  <div
    :class="['zpl-status', type ]"
    dir="rtl"
  >
    <span
      v-if="indicator"
      class="circle"
    />
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
