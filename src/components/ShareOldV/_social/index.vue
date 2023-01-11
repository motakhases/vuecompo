<template>
  <div class="zpl-social-old">
    <!-- Icon -->
    <div class="zpl-social-old-icon" v-if="loading">
      <Skeleton type="iconCircle" />
    </div>
    <a v-else :href="socials[keyName]" target="_blank" :class="['zpl-social-old-icon',`_${type}`]">
      <Icon :name="keyName" class="_icon" />
    </a>

    <!-- Name -->
    <Skeleton v-if="loading" type="body" class="w-[54px]" />

    <span v-else class="zpl-social-old-name">
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
