<template>
  <div class="zpl-social">
    <!-- Icon -->
    <div class="zpl-social-icon" v-if="loading">
      <Skeleton type="iconCircle" />
    </div>
    <a v-else :href="socials[keyName]" target="_blank" :class="['zpl-social-icon',`_${type}`]">
      <Icon :name="keyName" class="_icon" />
    </a>

    <!-- Name -->
    <Skeleton v-if="loading" type="body" class="w-[54px]" />

    <span v-else-if="name" class="zpl-social-name">
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
