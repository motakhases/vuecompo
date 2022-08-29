<template>
  <div :class="['zpl-search-group']" ref="inputRef">
    <div
      :class="['zpl-search', isBoxFocused ? 'focused' : '']"
      :disabled="disabled"
    >
      <div class="relative w-full h-full flex items-center">
        <span class="absolute z-[9]" v-if="!inputs[0].value && !isBoxFocused">جستجو</span>
        <div class="tags">
          <span
            v-for="(input, index) in inputs"
            :key="index"
            :class="['flex', !input.title && !input.value  ? 'w-full' : '']"
          >
            <!-- <span v-if="input.title">
              {{ input.title }}
            </span> -->
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
              @keydown.space="activeNextInput(input.value, index)"
               @keyup="(e) => filterInputs(input.value, e)"
              :class="[
                'outline-none min-w-md min-w-[12px] tag-input bg-transparent', !input.title && !input.value  ? 'w-full' : '',
              ]"
              @focus="!input.title ? onFocusIn() : null"
              size="1"
              @input="(e) => inputsHandler(input.value, e)"
            />
          </span>
          <!-- <span v-for="(tag, index) in tagList" :key="index">
            <Label type="neutral" size="small" :text="tag.label" />
            <input
              class="outline-none min-w-md min-w-[12px] tag-input"
              @input="(e) => tagInputHandler(index, tag.label, e)"
              @focusin="tagInputFocusin(index)"
              @keydown.space="tagInputKeyUp"
              @keydown.delete="(e) => tagInputDelete(index, e)"
              ref="tagInputRef"
              size="1"
            />
          </span> -->
        </div>
        <!-- <input
          class="
            relative
            z-10
            outline-none
            flex-1
            searchTextInput
            bg-transparent
          "
          ref="textInputRef"
          @focus="onFocusIn"
          v-show="!isTagValue"
          id="searchTextInput"
          v-model="searchModel"
        />
        <div v-if="isTagValue" class="h-full flex-1" @click="onBoxclick"></div> -->
        <!-- <form class="w-full h-full ">
          <textarea
            class="zpl-search-input"
            :name="inputName"
            :value="inputModel"
            @focusout="onFocusOut"
            @keyup="onKeyUp"
            @keydown="onKeyDown"
            @input="inputHandler"
             @focus="onFocusIn"
            rows="1"
            autocomplete="off"
            spellcheck="false"
            style="overflow: hidden; overflow-wrap: break-word"
          />
        </form> -->
      </div>
    </div>
    <div class="zpl-search-icon">
      <Icon name="SearchSmall" />
    </div>
    <Label
      v-if="!isInputFocused"
      class="zpl-search-dash"
      size="small"
      type="neutral"
      text="/"
    />
    <div ref="menuRef">
      <!-- dropdown list -->
      <div :class="['zpl-search-list']" v-if="showList" :style="style">
        <div class="zpl-search-format">{{ $t("common.search_format") }}</div>
        <ul id="select-dropdown" v-if="showMenueList">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option.id"
            ref="optionRef"
            :class="[
              'zpl-search-item',
              {
                disabled: option.disabled,
                selected: value === option.value,
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
            <!-- <Icon
              v-if="value === option.value"
              name="tickSmall"
              class="zpl-search-selected-icon"
            /> -->
          </li>
        </ul>
        <Button
          v-if="buttonSearchText"
          type="primary"
          size="medium"
          :text="` مشاهده نتایج  ${buttonSearchText} `"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import logic from "./logic";
import "./style.scss";

export default Vue.extend({ mixins: [logic] });
</script>
