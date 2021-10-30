<template>
  <div class="zpl-thumbnail">
    <Icon
      v-if="icon && !img"
      :name="icon"
    />
    <img
      v-if="img"
      :src="img"
      :alt="alt"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
