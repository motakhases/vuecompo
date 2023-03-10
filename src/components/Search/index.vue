<template>
  <div :class="['zpl-search-group']" ref="inputRef">
    <div :class="['zpl-search']">
      <div class="w-full h-2xl flex items-center">
        <span class="zpl-search-placeholder" v-if="!inputs[0].value && !inputs[0].title">
          {{ $t('common.search') }}
        </span>
        <div class="zpl-search-tags">
          <span
            v-for="(input, index) in inputs"
            :key="index"
            :class="[
              'zpl-search-tag-input',
              (inputWidthHandler(input, index) && notLastInput(index)) ||
              (index === inputs.length - 1 && !input.disabled)
                ? 'w-full'
                : '',
            ]"
          >
            <div v-if="input.title" @click="() => labelClickHandler(index)" class="py-[2px]">
              <Label type="neutral" size="small" :text="input.title" />
            </div>

            <input
              v-show="!input.disabled"
              v-model="input.value"
              @keydown.delete="(e) => removeInput(input, index, e)"
              @keydown.space="(e) => activeNextInput(input.value, index, e)"
              @keydown.enter="(e) => enter(e)"
              @keyup="(e) => filterInputs(input, index, e)"
              :class="[
                'tag-input ',
                (!input.title && !input.value.trim() && !input.disabled && notLastInput(index)) ||
                (index === inputs.length - 1 && !input.disabled)
                  ? 'w-full'
                  : '',
                input.disabled ||
                (!input.value && !input.disabled && notLastInput(index)) ||
                (inputs.length - 1 === index && !input.disabled) ||
                (inputs.length - 2 === index && inputs[inputs.length - 1].disabled)
                  ? 'flex-1'
                  : '',
              ]"
              @focus="(e) => onFocusIn(input, index)"
              @input="(e) => inputsHandler(input, e, index)"
              @keydown="(e) => onKeyDown(index, e)"
              ref="tagRef"
            />
            <div ref="shallowTextRef" class="zpl-search-shallow-input">
              {{ input.value }}
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="zpl-search-icon">
      <Icon name="SearchSmall" />
    </div>
    <Icon
      v-if="inputs[0].title || inputs[0].value"
      @click.native="(e) => deleteInputHandler(e)"
      name="FilledDelete"
      class="zpl-search-delete"
      ref="deleteBtnRef"
    />
    <Label v-else class="zpl-search-dash" size="small" type="neutral" text="/" />
    <div ref="menuRef">
      <!-- dropdown list -->
      <div :class="['zpl-search-list']" v-if="showList" :style="style" id="shayeste">
        <div class="zpl-search-format" v-if="showMenueList && filteredOptions.length">
          {{ $t('common.search_format') }}
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
            @click="selectOption(option, i)"
            @mouseenter="activateOption"
            @mouseleave="deactivateOption"
          >
            <div class="info">
              <Label type="neutral" size="small" :text="option.title" :width="labelWidth" />
              <div class="title">{{ option.text }}</div>
            </div>
          </li>
        </ul>
        <Button
          v-if="buttonSearchText"
          type="primary"
          size="medium"
          :text="` ${$t('common.show_results')} ${buttonSearchText} `"
          class="zpl-search-btn"
          beforeIcon="ArrowLeft"
          @click.native="onSearchClick"
          truncate
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
