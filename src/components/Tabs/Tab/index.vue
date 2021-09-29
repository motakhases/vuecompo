<template lang="html">
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>

