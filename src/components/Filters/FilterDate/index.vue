<template>
  <div class="zpl-filter-date">
    <Dropdown
      v-model="value"
      :options="options"
      placeholder="بازه تاریخ"
    />
    <Textfield
      v-if="selectedType === 'امروز'"
      after-icon="calender"
      disabled
      :value="finalDate"
      class="today"
    />
    <div
      v-if="selectedType === 'هفته جاری'"
      class="range-box"
    >
      <div class="range-input">
        <label>شروع</label>
        <Textfield
          after-icon="calender"
          disabled
          :value="finalDate[0]"
        />
      </div>
      <div class="range-input">
        <label>پایان</label>
        <Textfield
          after-icon="calender"
          disabled
          :value="finalDate[1]"
        />
      </div>
    </div>
    <slot />
    {{ date }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
