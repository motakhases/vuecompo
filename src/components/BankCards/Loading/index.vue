<template>
  <div class="p-md">
    <div class="zpl-bank-cards-top">
      <Skeleton type="thumbnail" />
      <div class="flex-1">
        <Skeleton type="body" class="w-[219px]" />
        <Skeleton type="body" class="w-[56px] mt-sm" />
      </div>
    </div>
    <div class="zpl-bank-cards-bottom py-lg" v-if="amont || rrn">
      <div class="flex justify-between" v-if="amount">
        <Skeleton type="body" class="w-1/4" />
        <Skeleton type="body" class="w-1/5" />
      </div>
      <div class="flex justify-between mt-lg" v-if="rrn">
        <Skeleton type="body"  class="w-1/6"/>
        <Skeleton type="body" class="w-2/5" />
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
export default class MessageBoxLoading extends Vue {
  @Prop({ type: Boolean, default: true }) readonly amount?: boolean;

  @Prop({ type: Boolean, default: true }) readonly rrn?: boolean;
}
</script>
