<template>
  <div>
    <Skeleton type="body" v-if="loading" class="w-[50px]" />
    <button
      :class="[
        'zpl-quick-filter-button',
        { active: $route.query[$parent.queryKey] === value },
      ]"
      v-else
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
