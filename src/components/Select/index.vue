<template>
  <div>
    <div :class="['zpl-select-group']">
      <div
        :class="['zpl-select', isBoxFocused ? 'focused' : '', { error: errors }]"
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
        />

        <!-- Value -->
        <div v-else :class="['zpl-select-value', { 'has-value': inputVal.length }]">
          <input v-model="inputVal" v-show="false" />
          <span>
            {{ inputVal.length ? inputVal : placeholder }}
          </span>
        </div>

        <!-- label -->
        <label v-if="label" :class="['zpl-select-label', isInputFocused | isBoxFocused ? 'isInputFocused' : '']">
          {{ label }}
        </label>

        <span class="zpl-select-icon">
          <Icon name="angleDown" />
        </span>
      </div>

      <!-- hint text -->
      <div class="zpl-select-hint-box">
        <!-- show when we have hint -->
        <div v-if="hint && !(successMessage && passed) && !errors" class="zpl-select-hint helper">
          <span>
            {{ hint }}
          </span>
        </div>

        <!-- show when we have successMessage -->
        <div v-if="successMessage && passed" class="zpl-select-hint success">
          <Icon name="checkmarkCircle" />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- show when we have errors -->
        <div v-if="errors" class="zpl-select-hint error">
          <Icon name="warning" />
          <span>{{ errors }}</span>
        </div>
      </div>
      <div ref="menuRef">
        <!-- dropdown list -->
        <div :class="['zpl-select-list']" v-if="showList" :style="style">
          <!-- loading skeleton shows when loading is true -->
          <div v-if="loading" class="flex flex-col gap-[34px] py-[15px] px-sm">
            <Skeleton type="body" class="w-1/4" />
            <Skeleton type="body" class="w-1/2" />
            <Skeleton type="body" class="w-1/3" />
          </div>

          <!-- shows option list when loading is false -->
          <ul v-else id="select-dropdown">
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
              <Icon v-if="option.icon" :name="option.icon" class="w-xl h-xl" />
              <BankLogos v-if="option.logo" :logo="option.logo" class="w-xl h-xl" />
              <div class="info">
                <div class="title">{{ option.text }}</div>
                <div class="sub">{{ option.sub }}</div>
              </div>
              <Icon v-if="value === option.value" name="tickSmall" class="zpl-select-selected-icon" />
            </li>
          </ul>
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
