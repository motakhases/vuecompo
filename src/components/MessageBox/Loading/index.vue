<template>
  <div class="loading">
    <Skeleton type="avatar" />
    <div class="card">
      <div class="card-header">
        <Skeleton type="body" />
        <Skeleton type="body" />
        <Skeleton type="body" class="w-1/2" />
      </div>
      <div class="card-footer">
        <Skeleton type="body" class="w-1/3" />
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
