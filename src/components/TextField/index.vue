<template>
  <ValidationProvider
    v-slot="{ invalid, errors, passed }"
    :rules="rules"
    :name="label"
    :vid="inputName"
  >
    <div class="zpl-textfield-group">
      <div
        :class="['zpl-textfield', { 'invalid': errors.length }]"
        :disabled="disabled"
      >
        <!-- Prefix Icon -->
        <Icon
          v-if="prefixIcon"
          :name="prefixIcon"
          class="zpl-textfield-icon"
        />

        <input
          v-model="model"
          :class="['zpl-textfield-input', { ltr }]"
          :disabled="disabled"
          :maxlength="maxlength"
          :placeholder="placeholder"
          :name="inputName"
          :readonly="readonly"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keypress="onlyNumber"
        >

        <!-- Suffic Icon -->
        <Icon
          v-if="suffixIcon"
          :name="suffixIcon"
          class="zpl-textfield-icon"
        />
        <!-- shows stepper to increase number or descrease -->
        <div
          v-if="stepper && type === 'number'"
          class="zpl-textfield-stepper"
        >
          <button
            class="zpl-textfield-stepper-btn"
            @click="increment"
          >
            <Icon name="filledArrowUp" />
          </button>

          <button
            class="zpl-textfield-stepper-btn"
            :disabled="value == 0"
            @click="decrement"
          >
            <Icon name="filledArrowDown" />
          </button>
        </div>

        <!-- unit -->
        <span
          v-if="unit"
          class="zpl-textfield-unit"
        >
          {{ unit }}
        </span>

        <!-- Copy to clipboard -->
        <Tooltip
          :text="copyToClipboardText"
          position="topCenter"
          space="smallSpace"
          class="zpl-copy-button"
          indicator=""
        >
          <Button
            v-if="copyable"
            :text="$t('common.copy')"
            type="secondary"
            @click.native="copyToClipboard"
          />
        </Tooltip>

        <!-- label -->
        <label
          v-if="label"
          :class="['zpl-textfield-label', { isInputFocused }]"
        >
          {{ label }}
        </label>
      </div>

      <div class="zpl-textfield-hint-box">
        <!-- Hint -->
        <div
          v-if="hint && !(successMessage && passed) && !errors.length"
          class="zpl-textfield-hint helper"
        >
          <span>
            {{ hint }}
          </span>
        </div>

        <!-- Success Message -->
        <div
          v-if="successMessage && passed"
          class="zpl-textfield-hint success"
        >
          <Icon
            name="CheckmarkCircle"
          />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- Errors -->
        <div
          v-if="errors.length"
          class="zpl-textfield-hint error"
        >
          <Icon name="warning" />
          <span>{{ errors[0] }}</span>
        </div>

        <!-- Max Length -->
        <span
          v-if="maxlength"
          class="zpl-textfield-hint-maxlength"
        >
          {{ maxlength }}/{{ value.length }}
        </span>
      </div>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
