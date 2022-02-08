<template>
  <div class="zpl-filter-actions">
    <Button
      text="حذف"
      type="secondary"
      size="small"
    />
    <div class="filter-text">
      فیلتر
    </div>
    <Button
      text="اعمال"
      type="primary"
      size="small"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterAction extends Mixins(Logic) {}
</script>
