<template>
  <div class="zpl-table-card">
    <!-- Header -->
    <div class="zpl-table-card-header">
      <!-- Right side (first index of array data) -->
      <TypeRenderer :data="headerRight" />

      <!-- Left side (Status and Actions) -->
      <div>
        <div
          v-for="(item, index) in headerLeft"
          :key="index"
          class="zpl-table-card-status"
        >
          <template v-if="item.type === 'status'">
            <Status
              v-for="(label, labelIndex) in item.data"
              :key="labelIndex"
              :text="label.title "
              :type="label.type"
              :icon="label.icon"
            />
          </template>
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

      <!-- Value -->
      <TypeRenderer :data="td[col.key]" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class TableCard extends Mixins(Logic) {}
</script>

