<template>
  <div class="zpl-reciept-list">
    <div v-for="index in loadingNumber" :key="index" class="zpl-reciept-item py-2xs">
      <Skeleton type="body" class="w-[96px]" />
      <span class="zpl-reciept-divider" />
      <Skeleton type="body" class="w-[64px]" />
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
export default class SummaryLoading extends Vue {
  @Prop({ type: Number }) readonly loadingNumber!: number;
}
</script>
