<template>
  <Icon name="Premium" :class="['w-lg h-lg', 'text-silver', isCollapsed ? 'hidden' : '']" />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
