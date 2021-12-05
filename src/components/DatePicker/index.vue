<template>
  <div>
    <!-- <input
      id="editable-input"
      type="text"
      placeholder="YYYY/MM/DD"
    > -->
    {{ date }}
    <VuePersianDatetimePicker
      v-model="date"
      inline
      :editable="true"
      format="YYYY-MM-DD"
      display-format="jYYYY/jMM/jDD"
      custom-input="#editable-input"
      auto-submit
      :range="range"
      class="zpl-date-picker"
    />
    <div>
      <!-- <TextField
        v-modal="value"
        rules="odd|required|min"
      /> -->
      <TextField
        id="editable-input"
        v-model="value"
        after-icon="calender"
      />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
