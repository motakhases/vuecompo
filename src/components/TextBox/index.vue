<template>
  <div :class="['zpl-textbox-group']">
    <textarea
      :class="['zpl-textbox', { error }]"
      :value="value"
      :rows="rowsNumber"
      :disabled="disabled"
      :maxlength="limit > 0 ? limit : undefined"
      @input="onInput"
      @focusout="onFocusOut"
      @focusin="onFocusIn"
    />
    <!-- show when we have label -->
    <label
      v-if="label"
      :class="['zpl-textbox-label', { activeLabel }]"
    >
      {{ label }}
    </label>
    <!-- show when we have hint text or limit -->
    <div class="zpl-textbox-hint-box">
      <!-- show when we have hint text -->
      <span
        v-if="hintText"
        :class="['zpl-textbox-hint', hint]"
      >
        {{ hintText }}
      </span>
      <!-- show when we have limit -->
      <span
        v-if="limit"
        class="zpl-textbox-hint-limit"
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
