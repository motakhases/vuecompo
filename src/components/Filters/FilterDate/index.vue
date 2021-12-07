<template>
  <div class="zpl-filter-actions">
    <Dropdown
      v-model="value"
      :disabled="disabled"
      :label="label"
      :helper-hint="helperHint"
      :success-hint="successHint"
      :options="options"
      :disabled-option-id="disabledOptionId"
      :loading="loading"
      :rules="rules"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
