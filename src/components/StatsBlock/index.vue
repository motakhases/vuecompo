<template>
  <div class="zpl-sb">
    <StatsBlockRow v-if="loading">
      <StatsBlockItem
        v-for="index in loadingNumber"
        :key="index"
        :loading="loading"
        :title="title"
        :link="link"
        :amount="amount"
        :caption="caption"
      />
    </StatsBlockRow>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import logic from './logic';
import './style.scss';

@Component
export default class StatsBlock extends Mixins(logic) {}
</script>
