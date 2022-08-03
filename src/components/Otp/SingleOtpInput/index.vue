<template>
  <input
    ref="input"
    :type="inputType"
    min="0"
    max="9"
    maxlength="1"
    pattern="[0-9]"
    v-model="model"
    :class="['zpl-otp-input', { error }]"
    @input="handleOnChange"
    @keydown="handleOnKeyDown"
    @paste="handleOnPaste"
    @focus="handleOnFocus"
    @blur="handleOnBlur"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
