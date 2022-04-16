<template>
  <div class="zpl-emptystate">
    <div
      :class="[
        'zpl-emptystate-box',
        { 'py-[40px]': !inCard, 'py-2xl': inCard },
      ]"
    >
      <div class="bg-empty-state" />
      <div class="zpl-emptystate-content">
        <p class="zpl-emptystate-title">{{ title }}</p>
        <p class="zpl-emptystate-caption">{{ caption }}</p>
      </div>
      <div class="zpl-emptystate-buttons" v-if="buttons.length">
        <Button
          v-for="(button, index) in buttons"
          class="mx-2xs"
          :key="index"
          :text="button.text"
          @click.native="button.action"
          :type="button.type"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
