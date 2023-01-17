<template>
  <div class="zpl-stepper">
    <component
      :is="completed >= i ? 'span' : 'div'"
      :class="['zpl-stepper-item', completed >= i ? 'fill' : null]"
      v-for="i in subSteps"
      :key="i"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
