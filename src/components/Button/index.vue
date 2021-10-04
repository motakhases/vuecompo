<template>
  <button
    :class="['zpl-button', size, type, { fill }]"
    :disabled="disabled"
  >
    <div
      v-if="loading"
      class="zpl-button-loading"
    >
      <div class="zpl-button-loading-1" />
      <div class="zpl-button-loading-2" />
    </div>
    <span
      v-if="leftIcon && !loading"
      :class="['zpl-button-icon', leftIcon]"
    />
    <slot v-if="!loading" />
    <span
      v-if="rightIcon && !loading"
      :class="['zpl-button-icon', rightIcon]"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
