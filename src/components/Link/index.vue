<template>
  <component
    :is="linkComponentDetector"
    :href="href"
    :to="to"
    :exact="exact"
    :target="target"
    class="zpl-link"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
