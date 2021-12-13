<template>
  <div
    :class="['zpl-inline-msg', size, type, { fill, icon }]"
    dir="rtl"
  >
    <Icon
      name="warning"
      class="zpl-warning-icon"
    />
    <div class="zpl-inline-msg-main">
      <div class="zpl-inline-msg-header">
        <div class="zpl-inline-msg-title">
          title
        </div>
        <Icon name="delete" />
      </div>
      <div class="zpl-inline-msg-des">
        desscription
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
