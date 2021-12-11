<template>
  <div
    :class="['zpl-bank-cards', `${logo}-card`]"
    dir="rtl"
  >
    <div class="zpl-bank-cards-top">
      <BankLogos :logo="logo" />
      <div class="zpl-bank-cards-name">
        {{ bankName }}
      </div>
      <div class="zpl-bank-cards-username">
        <span v-if="defaultAccount"> حساب پیش‌فرض تسویه </span>
        <span v-else>
          {{ username }}
        </span>
      </div>
    </div>
    <div class="zpl-bank-cards-container">
      <div class="zpl-bank-cards-amount-box">
        <span class="zpl-bank-cards-amount">
          <FilterSample
            :number="amount"
            number-format
          />
        </span>
        <span class="zpl-bank-cards-currency">ریال</span>
      </div>
      <div class="zpl-bank-cards-iban">
        {{ iban }}
      </div>
    </div>
    <div class="zpl-bank-cards-rrn">
      <span>شناسه واریز پایا</span>
      <span>
        {{ rrn }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
