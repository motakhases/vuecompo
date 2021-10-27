<template>
  <div class="rtl">
    <li :class="['zpl-nav-item', { active }]">
      <slot />
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
