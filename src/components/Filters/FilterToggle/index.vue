<template>
  <div class="zpl-filter-toggle">
    <CheckBox
      :text="text"
      :disabled="disabled"
      :name="name"
      :val="val"
      :change="change"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
