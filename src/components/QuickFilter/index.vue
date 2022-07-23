<template>
  <div class="zpl-quick-filter">
    <Loading :loadingNumber="loadingNumber" v-if="loading" />
    <QuickFilterButton
      v-for="(item, index) in items"
      :key="index"
      :text="item.text"
      :value="item.value"
      @click.native="changeFilter(item)"
      v-else
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
