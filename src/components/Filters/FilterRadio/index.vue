<template>
  <FilterAccordion
    v-model="status"
    text="وضعیت"
    name="firstCheckBox"
    val="اولین گزینه"
  >
    <Radio
      v-model="statusValue"
      name="r"
      val="active"
      text="موفق"
    />
    <Radio
      v-model="statusValue"
      name="r"
      val="inactive"
      text="ناموفق"
    />
  </FilterAccordion>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterDate extends Mixins(Logic) {}
</script>
