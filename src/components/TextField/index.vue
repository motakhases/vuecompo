<template>
  <div :class="['zpl-textfield-group']">
    <div
      :class="['zpl-textfield', { error }]"
      :disabled="disabled"
    >
      <input
        class="zpl-textfield-input"
        :value="value"
        :disabled="disabled"
        :maxlength="limit > 0 ? limit : undefined"
        @input="onInput"
        @focusout="onFocusOut"
        @focusin="onFocusIn"
      >
      <span
        v-if="unit"
        class="zpl-textfield-unit"
      >
        {{ unit }}
      </span>
    </div>

    <!-- show when we have label -->
    <label
      v-if="label"
      :class="['zpl-textfield-label', { activeLabel }]"
    >
      {{ label }}
    </label>
    <!-- show when we have hint text or limit -->
    <div
      v-if="hintText || limit"
      class="zpl-textfield-hint-box"
    >
      <!-- show when we have hint text -->
      <span
        v-if="hintText"
        :class="['zpl-textfield-hint', hint]"
      >
        {{ hintText }}
      </span>
      <!-- show when we have limit -->
      <span
        v-if="limit"
        class="zpl-textfield-hint-limit"
      >
        {{ limit }}/{{ value.length }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
