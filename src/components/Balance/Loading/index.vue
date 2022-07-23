<template>
  <div class="zpl-balance">
    <Skeleton type="body" class="w-1/4" />
    <div class="flex items-center gap-sm flex-1 justify-end">
      <Skeleton type="body" class="w-1/4" />
      <Skeleton type="iconButton" class="w-2xl h-2xl" />
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
export default class BalanceLoading extends Vue {}
</script>
