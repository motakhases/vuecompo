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
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
