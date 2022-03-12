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
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Indicator extends Mixins(Logic) {}
</script>
