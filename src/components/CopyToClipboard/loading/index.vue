<template>
  <div class="loading">
    <div class="title-box">
      <Skeleton class="w-1/3" type="body" />
    </div>
    <div class="text-box">
      <Skeleton class="w-[calc(100%-56px)]" type="body" />
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
export default class ClipLoading extends Vue {}
</script>
