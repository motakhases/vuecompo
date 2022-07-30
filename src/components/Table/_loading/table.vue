<template>
  <div class="loading">
    <table>
      <thead>
        <tr>
          <th
            v-for="(col, i) in cols"
            :key="`${i}-col`"
            :style="[{ width: col.width, minWidth: col.minWidth }]"
          >
            <Skeleton type="body" class="w-[64px]" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="(col, i) in cols" :key="`${i}-rows`">
            <span class="loading-custom" />
            <div v-if="hasCustom && i === 0" class="flex gap-sm items-center">
              <Skeleton type="thumbnail" />
              <div class="flex-1">
                <Skeleton type="body" class="w-2/3" />
                <Skeleton type="body" class="w-1/3 mt-xs" v-if="hasSubCustom" />
              </div>
            </div>
            <Skeleton v-else type="body" class="w-1/2" />
          </td>
          <td class="sticky-col" v-if="actions">
            <Skeleton type="iconButton" class="w-2xl h-2xl mr-auto" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';
import { ITableActions } from '@/types/index';

@Component({
  components: { Skeleton },
})
export default class Loading extends Vue {
  @Prop({ type: Number }) readonly rows!: number;

  @Prop({ type: Array }) readonly cols!: any[];

  @Prop({ type: Boolean }) readonly hasSubCustom?: boolean;

  @Prop({ type: Boolean }) readonly hasCustom?: boolean;

  @Prop({ type: Array }) readonly actions?: ITableActions[];
}
</script>
