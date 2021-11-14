<template>
  <thead>
    <tr>
      <slot />
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
