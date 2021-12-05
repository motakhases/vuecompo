<template>
  <ValidationProvider
    v-slot="{ invalid , errors, passed}"
    :rules="rules ? rules : null"
  >
    <div class="rtl">
      <div class="zpl-textfield-group">
        <div
          :class="['zpl-textfield', { 'invalid': errors.length }]"
          :disabled="disabled"
        >
          <!-- icon comes before input -->
          <Icon
            v-if="beforeIcon"
            :name="beforeIcon"
            class="zpl-textfield-icon"
          />

          <input
            :id="id"
            class="zpl-textfield-input"
            :value="formattedValue"
            :disabled="disabled"
            :maxlength="limit > 0 ? limit : undefined"
            :separator="separator"
            @input="onInput"
            @focusout="onFocusOut"
            @focusin="onFocusIn"
            @keypress="onlyNumber"
          >

          <!-- icon comes after input -->
          <Icon
            v-if="afterIcon"
            :name="afterIcon"
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
              :disabled="value==0"
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
          class="zpl-textfield-hint-box"
        >
          <!-- show when we have helperHint -->
          <div
            v-if="helperHint && !(successHint && passed) && !errors.length"
            class="zpl-textfield-hint helper"
          >
            <span>
              {{ helperHint }}
            </span>
          </div>
          <!-- show when we have successHint -->
          <div
            v-if="successHint && passed"
            class="zpl-textfield-hint success"
          >
            <Icon
              name="checkmarkCircle"
            />
            <span>
              {{ successHint }}
            </span>
          </div>
          <!-- show when we have errors -->
          <div
            v-if="errors.length"
            class="zpl-textfield-hint error"
          >
            <Icon name="warning" />
            <span>{{ errors[0] }}</span>
          </div>
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
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
