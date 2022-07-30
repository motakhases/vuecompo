<template>
  <div class="loading">
    <Skeleton type="heading" class="w-[56px] mb-sm" v-if="title" />
    <div v-if="list" class="mb-md">
      <Skeleton type="body" class="w-[72px]" />
      <Skeleton type="body" class="w-[90px] mt-xs" />
    </div>
    <div v-if="dropzone">
      <div class="dropzone">
        <Skeleton type="button" class="w-[144px]" />
        <Skeleton type="body" class="w-[200px]" />
      </div>
    </div>
    <Skeleton v-else type="button" class="w-[144px]" />
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
  @Prop({ type: Boolean, default: false }) readonly title?: boolean;

  @Prop({ type: Boolean, default: false }) readonly list?: boolean;

  @Prop({ type: Boolean, default: false }) readonly dropzone?: boolean;
}
</script>
