<template>
  <span :class="['zpl-notification-badge', numeric ? 'full' : 'empty']">
    <slot v-if="numeric" />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
