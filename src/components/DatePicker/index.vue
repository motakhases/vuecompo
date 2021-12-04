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
    />
    <div>
      <TextField
        id="editable-input"
        type="text"
        after-icon="calender"
        value=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
