<template>
  <div>
    <Dropdown
      width="300px"
      class="p-md"
      :autoClose="false"
      :isClose="isClose"
      @close="toggleClose"
    >
      <template slot="button">
        <button :class="['zpl-filter-button', { isActive }]">
          {{ title }}
          <div v-if="isActive">
            <span>: {{ finalActiveVal }}</span>
            <Icon
              name="FilledDelete"
              class="zpl-filter-delete"
              @click.native="clearHandler"
            />
          </div>
          <Icon name="AngleDown" class="w-xl h-xl mr-2xs" />
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
            class="w-full mt-lg"
            type="primary"
            size="medium"
            :text="$t('common.apply')"
            @click.native="buttonHandler"
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
export default class Filter extends Mixins(Logic) {}
</script>
