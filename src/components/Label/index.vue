<template>
  <span
    :class="['zpl-lable', size, type]"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
