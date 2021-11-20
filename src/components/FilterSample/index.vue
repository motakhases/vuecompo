<template>
  <div dir="rtl">
    <p>{{ text |strLimit(25,false) }}</p>
    <p>{{ number |numberFormat }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
