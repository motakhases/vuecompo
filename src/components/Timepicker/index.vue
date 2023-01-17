<template>
  <div class="relative">
    <div @click="toggleTime">
      <TextField v-model="model" unitIcon="AlarmTime" readonly label="ساعت" />
    </div>

    <div class="zpl-time-picker" v-if="show">
      <VuePersianDatetimePicker
        v-model="model"
        locale="fa"
        inline
        :editable="true"
        custom-input="#editable-input"
        :class="['']"
        type="time"
        auto-submit
      >
        <template #now-btn="{ goToday }">
          <Button size="medium" type="secondary" text="اکنون" @click.native="goToday" />
        </template>
        <template #submit-btn="{ submit }">
          <div class="flex gap-xs mr-auto">
            <!-- slot for "submit-btn" -->
            <Button size="medium" type="secondary" :text="$t('common.cancel')" @click.native="toggleTime" />

            <Button size="medium" type="primary" :text="$t('auth.accept')" @click.native="submitHandler(submit)" />
          </div>
        </template>
      </VuePersianDatetimePicker>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
