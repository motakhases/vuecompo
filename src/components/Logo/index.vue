<template>
  <div
    :class="[
      'zpl-logo',
      size,
      type,
      type === 'logo'
        ? 'dark:logo'
        : type === 'logo-type'
          ? 'dark:logo-type'
          : '',
    ]"
    :language="language"
    :name="name"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
