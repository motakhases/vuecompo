<template>
  <ValidationProvider
    v-slot="{ errors, passed }"
    :rules="rules"
  >
    <div :class="['zpl-dropdown-group']">
      <div
        :class="['zpl-dropdown',isBoxFocused ? 'focused' : '', { error: errors.length }]"
        :disabled="disabled"
        @click="onFocusIn"
      >
        <input
          v-if="search"
          :class="['zpl-dropdown-input']"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="inputModel"
          @focusout="onFocusOut"
          @keyup="onKeyUp"
          @keydown="onKeyDown"
          @input="inputHandler"
        >
        <span
          v-else
          class="zpl-dropdown-value"
        >
          {{ inputVal.length ? inputVal : placeholder }}
        </span>
        <!-- label -->
        <label
          v-if="label"
          :class="['zpl-dropdown-label', isInputFocused | isBoxFocused ? 'isInputFocused' : '' ]"
        >
          {{ label }}
        </label>

        <span class="zpl-dropdown-icon">
          <Icon name="angleDown" />
        </span>
      </div>

      <!-- hint text -->
      <div class="zpl-dropdown-hint-box">
        <!-- show when we have hint -->
        <div
          v-if="hint && !(successMessage && passed) && !errors.length"
          class="zpl-dropdown-hint helper"
        >
          <span>
            {{ hint }}
          </span>
        </div>

        <!-- show when we have successMessage -->
        <div
          v-if="successMessage && passed"
          class="zpl-dropdown-hint success"
        >
          <Icon name="checkmarkCircle" />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- show when we have errors -->
        <div
          v-if="errors.length"
          class="zpl-dropdown-hint error"
        >
          <Icon name="warning" />
          <span>{{ errors[0] }}</span>
        </div>
      </div>

      <!-- dropdown list -->
      <div :class="['zpl-dropdown-list', { showList }]">
        <!-- loading skeleton shows when loading is true -->
        <div v-if="loading">
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width: 27%"
            />
          </div>
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width: 48%"
            />
          </div>
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width: 36%"
            />
          </div>
        </div>

        <!-- shows option list when loading is false -->
        <ul
          v-else
          id="dropdown"
          ref="dropdownRef"
        >
          <li
            v-for="(option, i) in filteredOptions"
            :key="option.id"
            ref="optionRef"
            :class="[
              'zpl-dropdown-item',
              {
                disabled: option.disabled,
                selected: value === option.value,
                active: activeOptionIndex === i,
              },
            ]"
            @click="selectOption(option.value, option.text)"
            @mouseenter="activateOption"
            @mouseleave="deactivateOption"
          >
            {{ option.text }}
            <Icon
              v-if="value === option.value"
              name="tickLarge"
              class="zpl-dropdown-selected-icon"
            />
          </li>
        </ul>
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
