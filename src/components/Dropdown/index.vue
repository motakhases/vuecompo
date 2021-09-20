<template>
  <div class="rtl">
    <div
      :class="['zpl-textfield-group']"
      tabindex="0"
      @click="click"
      @blur="blur"
    >
      <div
        :class="['zpl-textfield', { error }]"
        :disabled="disabled"
      >
        <input
          :class="['zpl-textfield-input']"
          :value="value"
          :disabled="disabled"
          @input="onInput"
          @focusout="onFocusOut"
          @focusin="onFocusIn"
          @keypress="onlyNumber"
        >
      </div>
      <ul :class="['zpl-dropdown-list', { showList }]">
        <li
          v-for="option in options"
          :key="option.id"
          class="zpl-dropdown-item"
          @click="selectOption(option.name)"
        >
          {{ option.name }}
        </li>
      </ul>
      <!-- label -->
      {{ value }}
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
