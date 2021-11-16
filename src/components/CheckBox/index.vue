<template>
  <label :class="['zpl-checkbox']">
    {{ text }}

    <input
      v-model="model"
      type="checkbox"
      :name="`checkbox-${name}`"
      :value="val"
      :disabled="disabled"
    >

    <span class="checkmark" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
