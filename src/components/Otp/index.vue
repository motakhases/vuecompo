<template>
  <div class="w-full">
    <div class="zpl-otp">
      <!-- To turn off autocomplete when otp-input is password-->
      <input v-if="inputType === 'password'" autocomplete="off" name="hidden" type="text" class="hidden" />
      <SingleOtpInput
        v-for="(item, i) in numInputs"
        :key="i"
        :focus="activeInput === i"
        :value="otp[i]"
        :input-type="inputType"
        :should-auto-focus="shouldAutoFocus"
        @on-change="handleOnChange"
        @on-keydown="handleOnKeyDown"
        @on-paste="handleOnPaste"
        @on-focus="handleOnFocus(i)"
        @on-blur="handleOnBlur"
        :error="!!errorMsg"
      />
    </div>

    <!-- Errors -->
    <div v-if="errorMsg" class="zpl-textfield-hint error mt-2xs font-IRANYekanFaNum">
      <Icon name="warning" />
      <span>{{ errorMsg }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
