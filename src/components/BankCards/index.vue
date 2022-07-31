<template>
  <div
    :class="[
      'zpl-bank-cards',
      !loading ? `${camelCaseConverter(logo)}-card` : null,
      defaultAccount ? 'background' : '',
    ]"
  >
    <Loading v-if="loading" :amount="!!amount" :rrn="!!rrn" />
    <div
      v-else
      :class="['zpl-bank-cards-container', defaultAccount ? 'background' : '']"
    >
      <div class="zpl-bank-cards-top">
        <Thumbnail :logo="logo" />
        <div>
          <div class="zpl-bank-cards-iban">
            {{ iban }}
          </div>
          <span v-if="defaultAccount" class="zpl-bank-cards-username">
            {{ $t("reconcilation.reconcileDetail.reconcileDefaultAccount") }}
          </span>
          <span v-else class="zpl-bank-cards-username">
            {{ username }}
          </span>
        </div>
      </div>
      <div v-if="amount || rrn" class="zpl-bank-cards-bottom">
        <div class="zpl-bank-cards-row" v-if="amount">
          <div class="zpl-bank-cards-title">
            {{ $t("reconcilation.reconcileDetail.amount") }}
          </div>
          <div class="zpl-bank-cards-text">
            <FilterSample :number="amount" number-format />
            <span class="zpl-bank-cards-currency">
              {{ $t("common.rial") }}
            </span>
          </div>
        </div>
        <div class="zpl-bank-cards-row" v-if="rrn">
          <div class="zpl-bank-cards-title">
            {{ $t("reconcilation.reconcileDetail.rrn") }}
          </div>
          <div class="zpl-bank-cards-text">
            {{ rrn }}
          </div>
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
