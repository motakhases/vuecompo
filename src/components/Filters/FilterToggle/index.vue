<template>
  <div class="zpl-filter-toggle">
    <CheckBox
      v-model="model"
      :text="text"
      :disabled="disabled"
      :name="name"
      :val="val"
      :change="change"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
