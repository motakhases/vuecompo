<template>
  <div :class="['zpl-radio-card', model === val ? 'selected' : null, { disabled }]" @click="selectCardHandler">
    <!-- Header -->
    <div class="zpl-radio-card-top">
      <Radio v-model="model" name="radio" :val="val" :disabled="disabled" />
      <h4 class="zpl-radio-card-title" v-if="title">
        {{ title }}
      </h4>
      <div class="zpl-radio-card-desc" v-if="description">
        {{ description }}
      </div>
    </div>
    <div class="zpl-radio-card-img" v-if="image || icon">
      <img v-if="image" :src="image" alt="image" />
      <Icon v-if="icon" :name="icon" />
    </div>
    <!-- body -->
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
