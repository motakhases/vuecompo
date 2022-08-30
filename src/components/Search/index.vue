<template>
  <div :class="['zpl-search-group']" ref="inputRef">
    {{ isInputFocused }}
    {{ inputs }}
    <div
      :class="['zpl-search', isBoxFocused ? 'focused' : '']"
      @focusin="searchFocusIn"
      @focusout="searchFocusOut"
    >
      <div class="w-full h-full flex items-center">
        <span class="absolute z-[9]" v-if="!inputs[0].value && !isBoxFocused">
          {{ $t("common.search") }}
        </span>
        <div class="tags">
          <span
            v-for="(input, index) in inputs"
            :key="index"
            :class="[
              'zpl-search-tag-input',
              !input.title && !input.value.trim() && !input.disabled
                ? 'w-full'
                : '',
              !input.value && !input.disabled ? 'w-full' : '',
                inputs.length - 1 === index && !input.disabled ? 'w-full' : '',
                                inputs.length - 2 === index && inputs[inputs.length-1].disabled ? 'w-full':''

            ]"
          >
            <Label
              type="neutral"
              size="small"
              :text="input.title"
              v-if="input.title"
            />
            <input
              v-model="input.value"
              v-show="!input.disabled"
              @keydown.delete="removeInput(input, index)"
              @keydown.space="(e) => activeNextInput(input.value, index, e)"
              @keyup="(e) => filterInputs(input, e)"
              :class="[
                'tag-input',
                !input.title && !input.value.trim() && !input.disabled
                  ? 'w-full'
                  : '',
                !input.value && !input.disabled ? 'flex-1' : '',
                input.disabled ? 'flex-1' : '',
                inputs.length - 1 === index && !input.disabled ? 'w-full' : '',
                inputs.length - 2 === index && inputs[inputs.length-1].disabled ? 'flex-1':''
              ]"
              @focus="!input.title ? onFocusIn() : null"
              size="1"
              @input="(e) => inputsHandler(input, e)"
              @keydown="onKeyDown"
              @focusout="onFocusOut"
            />
            <!-- <div
              v-if="input.disabled"
              class="absolute inset-0"
              @click="() => wrapper(index)"
            /> -->
          </span>
        </div>
      </div>
      <div class="zpl-search-icon">
        <Icon name="SearchSmall" />
      </div>
    </div>
    <Label class="zpl-search-dash" size="small" type="neutral" text="/" />
    <div ref="menuRef">
      <!-- dropdown list -->
      <div :class="['zpl-search-list']" v-if="showList" :style="style">
        <div
          class="zpl-search-format"
          v-if="showMenueList && filteredOptions.length"
        >
          {{ $t("common.search_format") }}
        </div>
        <ul id="select-dropdown" v-if="showMenueList && filteredOptions.length">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option.id"
            ref="optionRef"
            :class="[
              'zpl-search-item',
              {
                active: activeOptionIndex === i,
              },
            ]"
            @click="selectOption(option)"
            @mouseenter="activateOption"
            @mouseleave="deactivateOption"
          >
            <div class="info">
              <Label type="neutral" size="small" :text="option.title" />
              <div class="title">{{ option.text }}</div>
            </div>
          </li>
        </ul>
        <Button
          v-if="buttonSearchText"
          type="primary"
          size="medium"
          :text="` مشاهده نتایج  ${buttonSearchText} `"
          class="w-full justify-start truncate"
          beforeIcon="ArrowLeft"
        />
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
