<template>
  <div class="zpl-date-picker-container">
    <VuePersianDatetimePicker
      v-model="date"
      locale="fa"
      inline
      :editable="true"
      format="YYYY-MM-DD"
      display-format="jYYYY/jMM/jDD"
      custom-input="#editable-input"
      auto-submit
      :range="range"
      :class="['zpl-date-picker', { 'no-preview': !preview }]"
      :highlight="highlightToday"
      @change="dateMoment = $event"
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
        {{ date.xFormat("jMMMM") }}
        <Icon name="angleDown" />
      </template>
      <template #header-year="{ vm, selectedDate }">
        {{ selectedDate.xYear() }}
        <Icon name="angleDown" />
      </template>
      <!-- slot for "close-btn" -->
      <template #close-btn="">
        <Icon name="close" />
      </template>
    </VuePersianDatetimePicker>
    <div
      v-if="range"
      class="zpl-date-picker-range"
    >
      <div class="zpl-date-picker-range-input">
        <label for="">شروع</label>
        <TextField
          v-model="startValue"
          type="text"
          after-icon="calender"
          placeholder="روز/ماه/سال"
          :focusout="firstInputHandler"
          :disabled="disableStart"
        />
      </div>
      <div class="zpl-date-picker-range-input">
        <label for="">پایان</label>
        <TextField
          v-model="endValue"
          after-icon="calender"
          placeholder="روز/ماه/سال"
          :focusout="secondInputHandler"
          :disabled="disableEnd"
        />
      </div>
    </div>
    <TextField
      v-else
      id="editable-input"
      v-model="singleValue"
      after-icon="calender"
      placeholder="روز/ماه/سال"
      :disabled="disableSingle"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
