<template>
  <div :class="['zpl-user-card-check', complete ? 'complete' : 'incomplete', { before }]">
    <Icon v-if="complete" name="checkmarkCircle" />
    <Icon v-else name="undoneCheck" />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
