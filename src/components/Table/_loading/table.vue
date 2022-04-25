<template>
  <div class="loading">
    <table>
      <thead>
        <tr>
          <th
            v-for="col in cols"
            :key="col"
            :width="col.width"
          />
        </tr>
      </thead>
      <tbody>
        <tr  v-for="row in rows" :key="row">
          <td v-for="col in cols" :key="col">
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

  @Prop({ type: Number }) readonly cols!: number
}
</script>
