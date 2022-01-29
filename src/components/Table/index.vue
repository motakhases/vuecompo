<template>
  <div class="zpl-table">
    <!-- Small view - Card -->
    <Card
      v-for="(td, index) in data"
      :key="index"
      :td="td"
      :columns="columns"
    />

    <!-- Large view - Table -->
    <table>
      <!-- Head -->
      <thead>
        <tr>
          <Th
            v-for="(col, index) in columns"
            :key="index"
            :title="col.title"
            :label="col.label"
          />
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr
          v-for="(td, tdIndex) in data"
          :key="tdIndex"
        >
          <Td
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :data="td[col.key]"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Table extends Mixins(Logic) {}
</script>
