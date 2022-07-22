<template>
  <div class="zpl-timeline">
    <div class="zpl-timeline-icon">
      <Skeleton type="iconCircle" />
    </div>
    <div class="zpl-timeline-cart">
      <Skeleton type="heading" class="w-1/3" />
      <Skeleton type="body" class="mt-lg" />
      <Skeleton type="body" class="w-1/2 mt-lg" />
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
export default class TimelineLoading extends Vue {}
</script>
