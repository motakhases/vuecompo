<template>
  <div>
    <a
      v-if="href"
      :href="href"
      class="zpl-link"
      :rel="rel"
    >
      <slot />
    </a>
    <router-link
      v-if="to"
      :to="to"
      class="zpl-link"
      :rel="rel"
      :replace="replace"
      :exact="exact"
      :append="append"
    >
      <slot />
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
