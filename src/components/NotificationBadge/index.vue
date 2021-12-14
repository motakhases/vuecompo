<template>
  <span :class="['zpl-notification-badge', text ? 'full' : 'empty']">
    {{ text }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
