<template>
  <label :class="['zpl-radio']">
    {{ text }}

    <input
      v-model="model"
      type="radio"
      :name="`radio-${name}`"
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
