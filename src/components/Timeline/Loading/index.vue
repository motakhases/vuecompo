<template>
  <div>
    <div class="zpl-timeline" v-for="index in loadingNumber" :key="index">
      <div class="zpl-timeline-icon">
        <Skeleton type="iconCircle" />
      </div>
      <div class="zpl-timeline-cart">
        <Skeleton type="heading" class="w-1/3" />
        <Skeleton type="body" class="mt-lg" />
        <Skeleton type="body" class="w-1/2 mt-lg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: {
    Skeleton,
  },
})
export default class TimelineLoading extends Vue {
  @Prop({ type: Number }) readonly loadingNumber!: number;
}
</script>
