<template>
  <div :class="['zpl-logo', size, type]" :language="language" :name="name" />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
