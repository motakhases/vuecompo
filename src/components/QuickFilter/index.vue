<template>
  <div class="zpl-quick-filter">
    <QuickFilterButton
      v-for="(item, index) in items"
      :key="index"
      :text="item.text"
      :active="item.active"
      @click.native="item.click(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
