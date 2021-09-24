<template>
  <div class="rtl">
    <div :class="['zpl-textfield-group']">
      <div
        :class="['zpl-textfield', { error }]"
        :disabled="disabled"
      >
        <input
          :class="['zpl-textfield-input', { 'ltr': type === 'number' }]"
          :value="formattedValue"
          :disabled="disabled"
          :maxlength="limit > 0 ? limit : undefined"
          :separator="separator"
          @input="onInput"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keypress="onlyNumber"
        >
        <!-- unit -->
        <span
          v-if="unit"
          class="zpl-textfield-unit"
        >
          {{ unit }}
        </span>
        <!-- label -->
        <label
          v-if="label"
          :class="['zpl-textfield-label', { 'active' : activeLabel }]"
        >
          {{ label }}
        </label>
      </div>
      <!--  hint text or limit container -->
      <div
        v-if="hintText || limit"
        class="zpl-textfield-hint-box"
      >
        <!-- hint text -->
        <span
          v-if="hintText"
          :class="['zpl-textfield-hint', hint]"
        >
          {{ hintText }}
        </span>
        <!-- limit -->
        <span
          v-if="limit"
          class="zpl-textfield-hint-limit"
        >
          {{ limit }}/{{ value.length }}
        </span>
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
