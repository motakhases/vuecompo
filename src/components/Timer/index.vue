<template>
  <div class="zpl-timer">
    <div>
      <span>{{ minutes }}</span>
      <span>:</span>
      <span>{{ seconds }}</span>
    </div>
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
