<template>
  <div class="flex items-center justify-between py-[10px]">
    <Skeleton type="heading" class="w-1/5" />
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
export default class CardLoading extends Vue {
}
</script>
