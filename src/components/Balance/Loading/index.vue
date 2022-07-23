<template>
  <div class="zpl-balance">
    <Skeleton type="body" class="w-1/4" />
    <div class="flex items-center gap-sm">
      <Skeleton type="body" class="w-1/4" />
      <Skeleton type="iconButton" />
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
