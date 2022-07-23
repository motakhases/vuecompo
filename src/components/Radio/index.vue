<template>
  <div>
    <div v-if="loading" class="zpl-radio-loading">
      <Skeleton type="iconCircle" />
      <Skeleton type="body" class="w-2/3" />
    </div>

    <label v-else :class="['zpl-radio', { 'zpl-radio-disabled': disabled }]">
      {{ text }}

      <input
        v-model="model"
        type="radio"
        :name="`radio-${name}`"
        :value="val"
        :disabled="disabled"
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
