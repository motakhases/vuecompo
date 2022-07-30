<template>
  <div class="flex items-center justify-between">
    <Skeleton type="heading" class="w-1/5" v-if="title" />
    <div class="zpl-card-actions mr-auto" v-if="actions">
      <Skeleton type="button" class="w-[80px]" />
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
export default class CardLoading extends Vue {
  @Prop({ type: Boolean }) readonly actions!: boolean;

  @Prop({ type: Boolean }) readonly title!: boolean;
}
</script>
