<template>
  <span :class="['zpl-lable', size, type, width]" v-if="text">
    {{ text }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
