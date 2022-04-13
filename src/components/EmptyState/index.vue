<template>
  <div class="zpl-emptystate">
    <div :class="['zpl-emptystate-box', { 'py-[40px]': !inCard, 'py-2xl': inCard  }]">
      <div class="bg-empty-state" />
      <div class="zpl-emptystate-content">
        <p class="zpl-emptystate-title"> {{title}} </p>
        <p class="zpl-emptystate-caption"> {{caption}} </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
