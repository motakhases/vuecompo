<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
