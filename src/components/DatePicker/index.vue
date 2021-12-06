<template>
  <div class="zpl-date-picker-container">
    <!-- <input
      id="editable-input"
      type="text"
      placeholder="YYYY/MM/DD"
    > -->
    {{ date }}
    {{ finalData }}
    <VuePersianDatetimePicker
      v-model="date"
      inline
      :editable="true"
      format="YYYY-MM-DD"
      display-format="jYYYY/jMM/jDD"
      custom-input="#editable-input"
      auto-submit
      :range="range"
      :class="['zpl-date-picker', { 'no-preview': !preview }]"
    >
      <Icon
        slot="prev-month"
        name="leftArrow"
      />
      <Icon
        slot="next-month"
        name="rightArrow"
      />
      <!-- slot for "month-name" -->
      <template #month-name="{ vm, date }">
        {{ date.xFormat('jMMMM') }}
        <Icon
          name="angleDown"
        />
      </template>
      <template #header-year="{ vm, selectedDate }">
        {{ selectedDate.xYear() }}
        <Icon
          name="angleDown"
        />
      </template>
      <!-- slot for "close-btn" -->
      <template #close-btn="">
        <Icon
          name="close"
        />
      </template>
    </VuePersianDatetimePicker>
    <div
      v-if="range"
      class="zpl-date-picker-range"
    >
      <input
        v-model="from"
        after-icon="calender"
        placeholder="روز/ماه/سال"
        @input="(e)=>focusOut(e,0)"
      >
      <input
        v-model="to"
        after-icon="calender"
        placeholder="روز/ماه/سال"
        @input="(e)=>focusOut(e,1)"
      >
      <!-- <TextField
        v-model="to"
        after-icon="calender"
        placeholder="روز/ماه/سال"
        @input="(e)=>focusOut(e,1)"
      /> -->
    </div>
    <TextField
      v-else
      id="editable-input"
      v-model="value"
      after-icon="calender"
      placeholder="روز/ماه/سال"
      disabled
    />
    {{ from }}
    <br>
    <!-- {{ rangeData }} -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
