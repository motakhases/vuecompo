<template>
  <div>
    <Dropdown
      width="300px"
      :autoClose="false"
      :isClose="isClose"
      @close="toggleClose"
      maxHeight="490px"
    >
      <template slot="button">
        <button :class="['zpl-filter-button', { isActive }]">
          {{ title }}
          <div v-if="isActive">
            <span class="hidden lg:inline-flex">: {{ finalActiveVal }}</span>
            <Icon
              name="FilledDelete"
              class="zpl-filter-delete"
              @click.native="clearHandler"
            />
          </div>
          <Icon v-else name="AngleDown" class="w-xl h-xl mr-2xs" />
        </button>
      </template>
      <template slot="body">
        <div class="p-xs">
          <div class="zpl-filter-header">
            <div class="zpl-filter-title">
              {{ $t("common.export.filter") }}
              {{ title }}
            </div>
            <div v-if="isActive" @click="clearHandler" class="zpl-filter-delete-btn">
              <div>
                {{ $t("common.delete") }} {{ $t("common.export.filter") }}
              </div>
              <Icon name="FilledDelete" />
            </div>
          </div>
          <slot />
          <Button
            class="!w-full mt-xl"
            type="primary"
            size="medium"
            :text="$t('common.apply')"
            @click.native="buttonHandler"
            :disabled="disabled"
          />
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class FilterBox extends Mixins(Logic) {}
</script>
