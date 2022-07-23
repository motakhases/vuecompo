<template>
  <div class="zpl-ds">
    <DataSheetRow v-if="loading">
      <DataSheetItem
        v-for="index in loadingNumber"
        :key="index"
        :row="row"
        :loading="loading"
        :leftAlign="leftAlign"
      />
    </DataSheetRow>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class DataSheet extends Mixins(Logic) {}
</script>
