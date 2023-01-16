<template>
  <div class="zpl-social">
    <Skeleton v-if="loading" type="button" class="w-[48px] h-[48px]"/>
    <!-- Icon -->
    <a v-else :href="urlAdr" target="_blank" :class="['zpl-social-icon',`_${typeStyle}`]">
      <Icon :name="typeIcon" class="_icon" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
