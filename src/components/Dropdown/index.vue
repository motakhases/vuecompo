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
          @keypress="onlyNumber"
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
      <ul :class="['zpl-dropdown-list', { 'showList':focused }]">
        <li
          v-for="(option,i) in filteredOptions"
          :key="option.id"
          ref="optionRef"
          :class="[
            'zpl-dropdown-item',
            {
              disabled: disabledOptionId == option.id,
              selected: value === option.name,
              active: activeOptionIndex === i || activeOption
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
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
