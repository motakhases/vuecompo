<template>
  <component :is="iconComponent" role="img" class="inline-block" />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
