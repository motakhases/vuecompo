<template>
  <div class="zpl-quick-filter">
    <div v-for="index in loadingNumber" :key="index" class="tab">
      <Skeleton type="body" class="w-1/2 min-w-[55px]" />
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
