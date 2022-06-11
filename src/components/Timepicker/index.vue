<template>
  <div class="zpl-time-picker">
    <VuePersianDatetimePicker
      v-model="model"
      locale="fa"
      inline
      :editable="true"
      custom-input="#editable-input"
      :class="['', { 'no-preview': !preview }]"
      @change="dateMoment = $event"
      type="time"
    >
      <!-- slot for "submit-btn" -->
  <template #submit-btn="{ vm, canSubmit, color, submit, lang }">
    <button
      type="button"
      :disabled="!canSubmit"
      :style="{ color }"
      @click="submit"
      v-text="lang.submit"
    />
  </template>
  <!-- slot for "cancel-btn" -->
  <template #cancel-btn="{ vm, color, lang }">
    <button
      type="button"
      :style="{ color }"
      @click="vm.visible = false"
      v-text="lang.cancel"
    />
  </template>

  <!-- slot for "now-btn" -->
  <template #now-btn="{ vm, color, goToday, lang }">
    <button
      type="button"
      :style="{ color }"
      @click="goToday"
      v-text="lang.now"
    />
  </template>
    </VuePersianDatetimePicker>sdlmsdmaskdm

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
