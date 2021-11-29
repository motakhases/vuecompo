<template>
  <div :class="['zpl-bank-cards', `${logo}-card`]">
    <div class="zpl-bank-cards-top">
      <slot name="logo" />
      <div class="zpl-bank-cards-name">
        {{ bankName }}
      </div>
      <div class="zpl-bank-cards-username">
        {{ username }}
      </div>
      <div
        v-if="favorite"
        class="zpl-bank-cards-favorite"
      >
        <Icon name="star" />
      </div>
    </div>
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
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
