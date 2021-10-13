<template>
  <ValidationProvider
    v-slot="{ invalid , errors, passed}"
    :rules="rules"
    class="zpl-textfield-input-box"
  >
    <div :class="['zpl-textbox-group']">
      <textarea
        :class="['zpl-textbox', { 'error': errors.length }]"
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
        <div
          v-if="hint === 'success' ? (passed ? hintText : '') : errors.length === 0 && hintText"
          :class="['zpl-textbox-hint', hint]"
        >
          <Icon
            v-if="hint === 'success'"
            name="checkmarkCircle"
          />
          <span>
            {{ hintText }}
          </span>
        </div>
        <div
          v-if="errors.length"
          class="zpl-textbox-hint error"
        >
          <Icon name="warning" />
          <span>{{ errors[0] }}</span>
        </div>
        <!-- show when we have limit -->
        <span
          v-if="limit"
          class="zpl-textbox-hint-limit"
        >
          {{ limit }}/{{ value.length }}
        </span>
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
