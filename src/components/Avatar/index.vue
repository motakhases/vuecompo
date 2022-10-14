<template>
  <div :class="['zpl-avatar', size]">
    <!-- with image -->
    <div
      v-if="img"
      :class="['zpl-avatar-img', size, { 'zpl-avatar-border': hasBorder }]"
      :style="{ backgroundImage: 'url(' + img + ')' }"
    />

    <!-- without image -->
    <div v-else :class="['zpl-avatar-icon', size]">
      <Icon name="profileFill" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
