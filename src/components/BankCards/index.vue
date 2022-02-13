<template>
  <div
    :class="['zpl-bank-cards', `${camelCaseConverter(logo)}-card`, defaultAccount ? 'background' : '']"
  >
    <div :class="['zpl-bank-cards-container', defaultAccount ? 'background' : '']">
      <div class="zpl-bank-cards-top">
        <Thumbnail :logo="logo" />
        <div>
          <div class="zpl-bank-cards-iban">
            {{ iban }}
          </div>
          <span
            v-if="defaultAccount"
            class="zpl-bank-cards-username"
          > حساب پیش‌فرض تسویه </span>
          <span
            v-else
            class="zpl-bank-cards-username"
          >
            {{ username }}
          </span>
        </div>
      </div>
      <div class="zpl-bank-cards-row">
        <div class="zpl-bank-cards-title">
          سهم واریز شده
        </div>
        <div class="zpl-bank-cards-text">
          <FilterSample
            :number="amount"
            number-format
          />
          <span class="zpl-bank-cards-currency">ریال</span>
        </div>
      </div>
      <div class="zpl-bank-cards-row">
        <div class="zpl-bank-cards-title">
          شناسه واریز
        </div>
        <div class="zpl-bank-cards-text">
          {{ rrn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
