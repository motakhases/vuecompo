<template>
  <div>
    <Skeleton v-if="loading" type="button" class="w-full" />
    <div v-else :class="['zpl-segment-group', { fill }]">
      <SegmentBtn
        v-for="item in items"
        :key="item.id"
        :text="item.text"
        :active="item.active"
        @click.native="item.click"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
