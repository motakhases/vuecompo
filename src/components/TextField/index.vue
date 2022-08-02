<template>
  <ValidationProvider
    v-slot="{ errors, passed }"
    :rules="rules"
    :name="label"
    :vid="inputName"
  >
    <div v-if="loading" class="zpl-textfield-loading">
      <Skeleton type="body" class="w-1/3" />
    </div>
    <div class="zpl-textfield-group" v-else>
      <div
        :class="['zpl-textfield', { invalid: errors.length }]"
        :disabled="disabled"
      >
        <!-- Prefix Icon -->
        <Icon v-if="prefixIcon" :name="prefixIcon" class="zpl-textfield-icon" />

        <input
          v-model="model"
          autocomplete="off"
          :class="['zpl-textfield-input', { ltr, 'font-Mono': mono }]"
          :disabled="disabled"
          :placeholder="placeholder"
          :name="inputName"
          :readonly="readonly"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keypress="onlyNumber"
        />

        <!-- Suffic Icon -->
        <Icon v-if="suffixIcon" :name="suffixIcon" class="zpl-textfield-icon" />
        <!-- shows stepper to increase number or descrease -->
        <div v-if="stepper && type === 'number'" class="zpl-textfield-stepper">
          <button
            class="zpl-textfield-stepper-btn"
            type="button"
            @click="increment"
          >
            <Icon name="filledArrowUp" />
          </button>

          <button
            class="zpl-textfield-stepper-btn"
            type="button"
            :disabled="value === min"
            @click="decrement"
          >
            <Icon name="filledArrowDown" />
          </button>
        </div>

        <!-- unit -->
        <span v-if="unit" class="zpl-textfield-unit">
          {{ unit }}
        </span>

        <!-- unit icon -->
        <span v-if="unitIcon" class="zpl-textfield-unit">
          <Icon :name="unitIcon" />
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
            size="medium"
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
        <div v-if="successMessage && passed" class="zpl-textfield-hint success">
          <Icon name="CheckmarkCircle" />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- Errors -->
        <div v-if="errors.length" class="zpl-textfield-hint error">
          <Icon name="warning" />
          <span>{{ errors[0] }}</span>
        </div>

        <!-- Max Length -->
        <span v-if="maxPreview" class="zpl-textfield-hint-maxlength">
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
