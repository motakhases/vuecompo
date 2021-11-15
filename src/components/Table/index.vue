<template>
  <div class="rtl">
    <table>
      <thead>
        <slot name="header" />
      </thead>
      <tbody>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
