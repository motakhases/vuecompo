<template>
  <div class="p-md">
    <div class="zpl-bank-cards-top">
      <Skeleton type="thumbnail" />
      <div class="flex-1">
        <Skeleton type="body" class="w-4/6" />
        <Skeleton type="body" class="w-1/3 mt-sm" />
      </div>
    </div>
    <div class="zpl-bank-cards-bottom py-lg">
      <div class="flex justify-between">
        <Skeleton type="body" class="w-1/4" />
        <Skeleton type="body" class="w-1/5" />
      </div>
      <div class="flex justify-between mt-lg">
        <Skeleton type="body"  class="w-1/6"/>
        <Skeleton type="body" class="w-2/5" />
      </div>
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
export default class MessageBoxLoading extends Vue {}
</script>
