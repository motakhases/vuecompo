<template>
  <div
    :class="[
      'page-heading-container',
      smallContainer ? 'small-container' : 'container',
    ]"
  >
    <div class="flex justify-between w-full pt-md pb-[20px]">
      <div class="flex gap-md items-center">
        <Button
          v-if="returnBtn"
          icon="ArrowRight"
          type="tertiary"
          size="medium"
        />
        <div>
          <div class="py-[10px] w-[160px]">
            <Skeleton type="heading" />
          </div>
          <Skeleton v-if="desc" type="body" class="mt-sm w-[240px]" />
        </div>
      </div>
      <Skeleton v-if="button" type="button" class="w-[80px]" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    Skeleton,
    Button,
  },
})
export default class SummaryLoading extends Vue {
  @Prop({ type: Boolean, default: false }) readonly returnBtn!: boolean;

  @Prop({ type: String }) readonly desc?: string;

  @Prop({ type: Boolean, default: false }) readonly smallContainer!: boolean;

  @Prop({ type: Boolean, default: false }) readonly button!: boolean;
}
</script>
