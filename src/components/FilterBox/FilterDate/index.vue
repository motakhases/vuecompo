<template>
  <div class="zpl-filter-date">
    <Select v-model="date" :options="options" :placeholder="$t('common.export.date_range')" class="dropdown" />
    <DataSheet v-if="date === 'TODAY'">
      <DataSheetRow>
        <DataSheetItem row leftAlign :title="$t('common.export.today')">
          {{ model }}
        </DataSheetItem>
      </DataSheetRow>
    </DataSheet>
    <div
      v-if="(date === 'CURRENT_WEEK') | (date === 'CURRENT_MONTH') | (date === 'LAST_MONTH') | (date === 'LAST_WEEK')"
    >
      <DataSheet>
        <DataSheetRow>
          <DataSheetItem row leftAlign :title="$t('common.from')">
            {{ model[0] }}
          </DataSheetItem>
        </DataSheetRow>
        <DataSheetRow>
          <DataSheetItem row leftAlign :title="$t('common.to')">
            {{ model[1] }}
          </DataSheetItem>
        </DataSheetRow>
      </DataSheet>
    </div>
    <DatePicker v-if="date === 'OPTIONAL_PERIOD'" v-model="model" range />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterDate extends Mixins(Logic) {}
</script>
