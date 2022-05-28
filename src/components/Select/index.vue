<template>
  <ValidationProvider
    v-slot="{ errors, passed }"
    :rules="rules"
    :name="label"
    :vid="inputName"

  >
    <div :class="['zpl-select-group']">
      <div
        :class="[
          'zpl-select',
          isBoxFocused ? 'focused' : '',
          { error: errors.length },
        ]"
        :disabled="disabled"
        @click="onFocusIn"
        ref="inputRef"
      >
        <input
          v-if="search"
          class="zpl-select-input"
          :disabled="disabled"
          :placeholder="placeholder"
          :name="inputName"
          :value="inputModel"
          @focusout="onFocusOut"
          @keyup="onKeyUp"
          @keydown="onKeyDown"
          @input="inputHandler"
        >

        <!-- Value -->
        <span
          v-else
          :class="['zpl-select-value', { 'has-value': inputVal.length }]"
        >
          {{ inputVal.length ? inputVal : placeholder }}
        </span>

        <!-- label -->
        <label
          v-if="label"
          :class="[
            'zpl-select-label',
            isInputFocused | isBoxFocused ? 'isInputFocused' : '',
          ]"
        >
          {{ label }}
        </label>

        <span class="zpl-select-icon">
          <Icon name="angleDown" />
        </span>
      </div>

      <!-- hint text -->
      <div class="zpl-select-hint-box">
        <!-- show when we have hint -->
        <div
          v-if="hint && !(successMessage && passed) && !errors.length"
          class="zpl-select-hint helper"
        >
          <span>
            {{ hint }}
          </span>
        </div>

        <!-- show when we have successMessage -->
        <div
          v-if="successMessage && passed"
          class="zpl-select-hint success"
        >
          <Icon name="checkmarkCircle" />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- show when we have errors -->
        <div
          v-if="errors.length"
          class="zpl-select-hint error"
        >
          <Icon name="warning" />
          <span>{{ errors[0] }}</span>
        </div>
      </div>
      <div ref="menuRef">
        <!-- dropdown list -->
        <div
          :class="['zpl-select-list']"
          v-if="showList"
          :style="style"
        >
          <!-- loading skeleton shows when loading is true -->
          <div v-if="loading">
            <div class="zpl-select-skeleton-box">
              <span class="zpl-select-skeleton" style="width: 27%" />
            </div>
            <div class="zpl-select-skeleton-box">
              <span class="zpl-select-skeleton" style="width: 48%" />
            </div>
            <div class="zpl-select-skeleton-box">
              <span class="zpl-select-skeleton" style="width: 36%" />
            </div>
          </div>

          <!-- shows option list when loading is false -->
          <ul
            v-else
            id="dropdown"
          >
            <li
              v-for="(option, i) in filteredOptions"
              :key="option.id"
              ref="optionRef"
              :class="[
                'zpl-select-item',
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
                class="zpl-select-selected-icon"
              />
            </li>
          </ul>
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
