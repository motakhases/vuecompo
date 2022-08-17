<template>
  <div class="zpl-filter-date">
    <Select
      v-model="date"
      :options="options"
      :placeholder="$t('common.export.date_range')"
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
      v-if="
      (date === 'CURRENT_WEEK') |
      (date === 'CURRENT_MONTH') |
      (date === 'LAST_MONTH') |
      (date === 'LAST_WEEK')"
      class="range-box"
    >
      <div class="range-input">
        <label>{{ $t('date.start') }}</label>
        <Textfield
          v-model="model[0]"
          suffix-icon="Calendar"
          disabled
        />
      </div>
      <div class="range-input">
        <label>{{ $t('date.end') }}</label>
        <Textfield
          v-model="model[1]"
          suffix-icon="Calendar"
          disabled
        />
      </div>
    </div>
    <DatePicker
      v-if="date === 'OPTIONAL_PERIOD'"
      v-model="model"
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
