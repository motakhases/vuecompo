<template>
  <div class="zpl-table-card">
    <!-- Header -->
    <div class="zpl-table-card-header">
      <div>
        <span v-if="headerRight.type === 'price'">
          {{ headerRight.data.toLocaleString() }}
          <Label
            size="small"
            type="neutral"
            text="ریال"
          />
        </span>
      </div>
      <div>
        <div
          v-for="(item, index) in headerLeft"
          :key="index"
        >
          <span v-if="item.type === 'status'">
            <Status
              v-for="(label, labelIndex) in item.data"
              :key="labelIndex"
              :text="label.title "
              :type="label.type"
            />
          </span>
        </div>
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="(col, colIndex) in rendredData"
      :key="colIndex"
      class="zpl-table-card-row"
    >
      <!-- Title of row [Static] -->
      <span>
        {{ col.title }}
      </span>

      <!-- Number -->
      <span v-if="td[col.key].type === 'price'">
        {{ td[col.key].data.toLocaleString() }}
      </span>

      <!-- Date -->
      <span v-else-if="td[col.key].type === 'date'">
        {{ td[col.key].data | JdateName }}
      </span>

      <!-- Regular text -->
      <span v-else-if="td[col.key].type === 'text'">
        {{ td[col.key].data }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class TableCard extends Mixins(Logic) {}
</script>

