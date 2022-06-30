<template>
  <div class="zpl-reciept">
    <div class="zpl-reciept-title">text</div>
    <span class="zpl-reciept-divider" />
    <div class="zpl-reciept-text">0 ریال</div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
