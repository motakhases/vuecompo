<template>
  <div class="rtl">
    <router-link :to="link">
      <div class="zpl-nav-create">
        <Thumbnail icon="plus" />
        <slot />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
