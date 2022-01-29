<template>
  <div class="zpl-tabel">
    <table>
      <!-- Head -->
      <thead>
        <tr>
          <Th
            v-for="(col, index) in columns"
            :key="index"
            :title="col.title"
            :label="col.label"
            class="text-xs"
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
