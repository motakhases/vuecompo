<template>
  <span :class="['zpl-zp', level]">
    <!-- Level -->
    <span class="zpl-zp-level">
      <Icon name="ProfileFill" class="icon" />
      {{ levelText }}
    </span>

    <!-- Id -->
    <span class="zpl-zp-id">
      ZP.{{ id }}
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
