<template>
  <div class="loading">
    <table>
      <thead>
        <tr>
          <th
            v-for="(col, i) in cols"
            :key="`${i}-col`"
            :width="col.width"
          />
        </tr>
      </thead>
      <tbody>
        <tr  v-for="row in rows" :key="row">
          <td v-for="(col, i) in cols" :key="`${i}-rows`">
            <span class="loading-custom" />
          </td>
          <td class="sticky-col" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop({ type: Number }) readonly rows!: number

  @Prop({ type: Array }) readonly cols!: any[]
}
</script>
