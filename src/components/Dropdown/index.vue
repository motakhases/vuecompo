<template>
  <div class="rtl">
    <div
      :class="['zpl-dropdown-group']"
    >
      <div
        :class="['zpl-dropdown', { error }]"
        :disabled="disabled"
      >
        <input
          :class="['zpl-dropdown-input']"
          :value="value"
          :disabled="disabled"
          @input="onInput"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keyup="onKeyUp"
          @keydown="onKeyDown"
        >
        <!-- label -->
        <label
          v-if="label"
          :class="['zpl-dropdown-label', { activeLabel }]"
        >
          {{ label }}
        </label>
      </div>
      <!-- hint text -->
      <span
        v-if="hintText"
        :class="['zpl-dropdown-hint', hint]"
      >
        {{ hintText }}
      </span>
      <!-- dropdown list -->
      <div :class="['zpl-dropdown-list', { 'showList':focused }]">
        <!-- loading skeleton shows when loading is true -->
        <div v-if="loading">
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width:27%;"
            />
          </div>
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width:48%;"
            />
          </div>
          <div class="zpl-dropdown-skeleton-box">
            <span
              class="zpl-dropdown-skeleton"
              style="width:36%;"
            />
          </div>
        </div>
        <!-- shows option list when loading is false -->
        <ul v-else>
          <li
            v-for="(option,i) in filteredOptions"
            :key="option.id"
            ref="optionRef"
            :class="[
              'zpl-dropdown-item',
              {
                disabled: disabledOptionId == option.id,
                selected: value === option.name,
                active: activeOptionIndex === i
              },
            ]"
            @click="selectOption(option.name)"
            @mouseenter="activateOption"
            @mouseleave="deactivateOption"
          >
            {{ option.name }}
          </li>
        </ul>
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
