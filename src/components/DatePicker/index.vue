<template>
  <div class="zpl-date-picker-container">
    <VuePersianDatetimePicker
      v-model="model"
      locale="fa"
      inline
      :editable="true"
      format="jYYYY-jMM-jDD"
      display-format="jYYYY-jMM-jDD"
      custom-input="#editable-input"
      auto-submit
      :range="range"
      :class="['zpl-date-picker', { 'no-preview': !preview }]"
      :highlight="highlightToday"
      @change="dateMoment = $event"
    >
      <Button
        slot="prev-month"
        type="tertiary"
        icon="ArrowLeft"
      />
      <Button
        slot="next-month"
        type="tertiary"
        icon="ArrowRight"
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
      <template #close-btn>
        <Icon name="close" />
      </template>
    </VuePersianDatetimePicker>
    <div
      v-if="range"
      class="zpl-date-picker-range"
    >
      <div class="zpl-date-picker-range-input">
        <label for="">{{ $t('date.start') }}</label>
        <TextField
          v-model="model[0]"
          type="text"
          suffix-icon="Calendar"
          :placeholder="$t('date.format')"
          :disabled="disableStart"
        />
      </div>
      <div class="zpl-date-picker-range-input">
        <label for="">{{ $t('date.end') }}</label>
        <TextField
          v-model="model[1]"
          suffix-icon="Calendar"
          :placeholder="$t('date.format')"
          :disabled="disableEnd"
        />
      </div>
    </div>
    <TextField
      v-else
      id="editable-input"
      v-model="model"
      suffix-icon="Calendar"
      :placeholder="$t('date.format')"
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
