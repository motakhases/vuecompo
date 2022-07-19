<template>
  <div>
    <div v-if="loading" class="zpl-checkbox-loading">
      <Skeleton type="iconSquare" />
      <Skeleton type="body" class="w-2/3" />
    </div>
    <label v-else :class="['zpl-checkbox', { 'zpl-checkbox-disabled': disabled }]">
      {{ text }}

      <input
        v-model="model"
        type="checkbox"
        :name="`checkbox-${name}`"
        :value="val"
        :disabled="disabled"
        @change="change"
      />

      <span class="checkmark" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
