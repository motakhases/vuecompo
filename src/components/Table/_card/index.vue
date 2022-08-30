<template>
  <div :class="['zpl-table-card', { bordered }]">
    <!-- Header -->
    <div class="zpl-table-card-header">
      <!-- Right side (first index of array data) -->
      <TypeRenderer v-if="headerRight" :data="headerRight" />

      <!-- Left side (Status and Actions) -->
      <div class="zpl-table-card-header-left">
        <div
          v-for="(item, index) in headerLeft"
          :key="index"
          class="zpl-table-card-status"
        >
          <template v-if="item.type === 'status'">
            <Status
              v-for="(label, labelIndex) in item.data"
              :key="labelIndex"
              :text="label.text"
              :type="label.type"
              :icon="label.icon"
            />
          </template>
          <template v-if="item.type === 'label'">
            <Label
              v-for="(label, labelIndex) in item.data"
              :key="labelIndex"
              :text="label.text"
              :type="label.type"
              size="small"
            />
          </template>
        </div>
      </div>
    </div>
    <ul>
      <!-- Rows -->
      <li
        v-for="(col, colIndex) in rendredData"
        :key="colIndex"
        class="zpl-table-card-row"
      >
        <!-- Title of row [Static] -->
        <span>
          {{ col.title }}
        </span>

        <!-- Value -->
        <TypeRenderer v-if="td[col.key]" :data="td[col.key]" />
      </li>
    </ul>
    <div class="zpl-table-card-action">
      <Button
        :text="$t('common.show_detail')"
        size="medium"
        type="neutral"
        afterIcon="AngleLeft"
        @click.native="linkHandler"
        v-if="routeName"
      />
      <Button
        :text="$t('common.show_detail')"
        size="medium"
        type="neutral"
        afterIcon="AngleLeft"
        @click.native="handleClickFromOutside()"
        v-if="handleClickFromOutside"
      />
      <div v-if="actions" class="w-full">
        <div
          v-if="actions.length === 1"
          :class="['outside-action flex justify-end']"
        >
          <Button
            type="tertiary"
            size="small"
            :icon="item.icon"
            v-for="(item, index) in actions"
            :key="index"
            @click.native="item.action(td)"
          />
        </div>
        <div v-if="actions.length > 1" class="zpl-table-action">
          <Dropdown :list="actions" :custom-payload="td">
            <template slot="button">
              <Button type="tertiary" size="small" icon="DotsMenu" />
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class TableCard extends Mixins(Logic) {}
</script>
