<template>
  <div :class="['zpl-thumbnail', size]">
    <Icon
      v-if="icon && !img"
      :name="icon"
    />
    <img
      v-if="img"
      :src="img"
      :alt="alt"
    >
    <BankLogos
      v-if="logo"
      :logo="logo"
      class="zpl-thumbnail-logo"
    />
    <PSPLogos
      v-if="pspLogo"
      :logo="pspLogo"
      class="zpl-thumbnail-logo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
