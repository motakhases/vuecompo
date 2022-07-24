<template>
  <div class="loading">
    <div class="title-box" v-if="title">
      <Skeleton class="w-1/3" type="body" />
    </div>
    <div class="text-box">
      <Skeleton class="w-[calc(100%-56px)]" type="body" />
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
export default class ClipLoading extends Vue {
  @Prop({ type: String }) readonly title?: string;
}
</script>
