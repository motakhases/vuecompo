<template>
  <div class="zpl-filter-date">
    <Dropdown
      v-model="date"
      :options="options"
      placeholder="بازه تاریخ"
      class="dropdown"
    />
    <Textfield
      v-if="date === 'TODAY'"
      v-model="model"
      suffix-icon="Calendar"
      disabled
      class="today"
    />
    <div
      v-if="date === 'CURRENT_WEEK'"
      class="range-box"
    >
      <div class="range-input">
        <label>شروع</label>
        <Textfield
          v-model="model[0]"
          suffix-icon="Calendar"
          disabled
        />
      </div>
      <div class="range-input">
        <label>پایان</label>
        <Textfield
          v-model="model[1]"
          suffix-icon="Calendar"
          disabled
        />
      </div>
    </div>
    <DatePicker
      v-if="date === 'OPTIONAL_PERIOD'"
      v-model="range"
      range
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterDate extends Mixins(Logic) {}
</script>
