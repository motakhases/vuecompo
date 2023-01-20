<template>
  <div class="zpl-stepper-group">
    <Stepper v-for="step in steppers" :key="step.id" :subSteps="step.subSteps" :completed="step.completed" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
