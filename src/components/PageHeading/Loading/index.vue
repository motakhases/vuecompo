<template>
  <div
    :class="[
      'page-heading-container',
      smallContainer ? 'small-container' : 'container',
    ]"
  >
    <div class="flex justify-between w-full">
      <div class="flex gap-md">
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
      <div v-if="button > 0" class="flex gap-xs">
      <Skeleton v-for="index in button" :key="index" type="button" class="w-[80px]" />
      </div>
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

  @Prop({ type: Boolean, default: false }) readonly desc?: boolean;

  @Prop({ type: Boolean, default: false }) readonly smallContainer!: boolean;

  @Prop({ type: Number, default: 0 }) readonly button!: number;
}
</script>
