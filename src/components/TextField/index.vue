<template>
  <div class="rtl">
    <div :class="['zpl-textfield-group']">
      <div
        :class="['zpl-textfield', { error }]"
        :disabled="disabled"
      >
        <!-- icon comes before input -->
        <Icon
          v-if="beforeIcon"
          :name="beforeIcon"
          class="zpl-textfield-icon"
        />
        <input
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
        v-if="hintText || limit"
        class="zpl-textfield-hint-box"
      >
        <!-- hint text -->
        <div
          v-if="hintText"
          :class="['zpl-textfield-hint', hint]"
        >
          <Icon :name="hintIcon" />
          <span>{{ hintText }}</span>
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
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
