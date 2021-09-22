<template>
  <div class="rtl">
    <div
      :class="['zpl-textfield-group']"
    >
      <div
        :class="['zpl-textfield', { error }]"
        :disabled="disabled"
        @click="showOptions"
      >
        <input
          :class="['zpl-textfield-input']"
          :value="value"
          :disabled="disabled"
          @input="onInput"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keypress="onlyNumber"
          @keyup="onKeyUp"
          @keydown="onKeyDown"
        >
      </div>
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
      <!-- label -->
      <label
        v-if="label"
        :class="['zpl-textfield-label', { activeLabel }]"
      >
        {{ label }}
      </label>
      <!--  hint text container -->
      <div
        v-if="hintText"
        class="zpl-textfield-hint-box"
      >
        <!-- hint text -->
        <span
          v-if="hintText"
          :class="['zpl-textfield-hint', hint]"
        >
          {{ hintText }}
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
