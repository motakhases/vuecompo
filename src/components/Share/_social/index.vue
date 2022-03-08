<template>
  <div class="zpl-social">
    <!-- Icon -->
    <a
      :href="socials[keyName]"
      target="_blank"
      class="zpl-social-icon"
    >
      <Icon
        :name="keyName"
        class="_icon"
      />
    </a>
    <!-- Name -->
    <span class="zpl-social-name">
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
