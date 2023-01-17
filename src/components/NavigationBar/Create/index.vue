<template>
  <div class="zpl-nav-create-box">
    <a :to="link" class="zpl-nav-create">
      <Icon name="plus" />
      <slot />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
