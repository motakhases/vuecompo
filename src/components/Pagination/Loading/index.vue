<template>
  <div class="loading">
    <div class="flex">
      <div class="line-number">
        <Skeleton class="w-[220px]" type="body" />
      </div>
      <Skeleton class="w-[72px]" type="body" />
    </div>
    <div class="flex">
      <div class="line-number">
        <Skeleton class="w-[64px] h-2xl" type="iconButton" />
      </div>
      <div class="flex gap-xs">
        <Skeleton class="w-2xl h-2xl" type="iconButton" />
        <Skeleton class="w-2xl h-2xl" type="iconButton" />
        <Skeleton class="w-2xl h-2xl" type="iconButton" />
        <Skeleton class="w-2xl h-2xl" type="iconButton" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: {
    Skeleton,
  },
})
export default class PaginarionLoading extends Vue {}
</script>
