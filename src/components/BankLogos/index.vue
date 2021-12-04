<template>
  <div :class="[`zpl-bank-logos logo-${logo}`]" />
</template>
<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
