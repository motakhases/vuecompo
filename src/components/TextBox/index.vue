<template>
  <div>
    <div v-if="loading" class="zpl-textbox-loading">
      <Skeleton type="body" class="w-1/3" />
    </div>
    <div :class="['zpl-textbox-group']" v-else>
      <textarea
        v-model="model"
        :class="['zpl-textbox', { error: errors }, { isInputFocused }]"
        :rows="rows"
        :disabled="disabled"
        name="inputName"
        :maxlength="maxlength"
        @focusout="onFocusOut"
        @focusin="onFocusIn"
      />

      <!-- show when we have label -->
      <label v-if="label" :class="['zpl-textbox-label', { isInputFocused }]">
        {{ label }}
      </label>

      <!-- show when we have hint text or maxlength -->
      <div class="zpl-textbox-hint-box">
        <!-- show when we have hint -->
        <div v-if="hint && !(successMessage && passed) && !errors" class="zpl-textbox-hint helper">
          <span>
            {{ hint }}
          </span>
        </div>

        <!-- show when we have successMessage -->
        <div v-if="successMessage && passed" class="zpl-textbox-hint success">
          <Icon name="checkmarkCircle" />
          <span>
            {{ successMessage }}
          </span>
        </div>

        <!-- show when we have errors -->
        <div v-if="errors && errors" class="zpl-textbox-hint error">
          <Icon name="warning" />
          <span>{{ errors }}</span>
        </div>

        <!-- show when we have maxlength -->
        <span v-if="maxPreview" class="zpl-textbox-hint-maxlength"> {{ maxlength }}/{{ value.length }} </span>
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
