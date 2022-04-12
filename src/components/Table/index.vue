<template>
  <div :class="['zpl-table']">
    <!-- Small view - Card -->
    <template v-if="isLoadCards">
      <Card
        v-for="(td, index) in data"
        :key="index"
        :td="td"
        :columns="columns"
        :bordered="bordered"
        :actions="actions"
      />
    </template>

    <!-- Large view - Table -->
    <template v-else>
      <div :class="['zpl-table-box', { bordered }]">
        <table>
          <!-- Head -->
          <thead>
            <tr>
              <!-- CheckBox -->
              <th v-if="selectable" class="checkbox-holder">
                <CheckBox v-model="isAllRowSelected" name="all" />
              </th>
              <!-- Column title -->
              <Th
                v-for="(col, index) in columns"
                :key="index"
                :title="col.title"
                :label="col.label"
                :object-key="col.key"
                :can-sort="col.sort"
                :width="col.width"
                :min-width="col.minWidth"
                :max-width="col.maxWidth"
              />
            </tr>
          </thead>

          <!-- Body -->
          <tbody>
            <tr
              v-for="(td, tdIndex) in data"
              :key="tdIndex"
              :class="isRowSelected(tdIndex)"
            >
              <!-- CheckBox -->
              <td v-if="selectable" class="checkbox-holder">
                <CheckBox
                  v-model="selectedRowsIndex"
                  :val="tdIndex"
                  name="single"
                  @click.native="selectRow"
                />
              </td>

              <!-- Row's data -->
              <Td
                v-for="(col, colIndex) in columns"
                :key="colIndex"
                :data="td[col.key]"
                :link-prefix="linkPrefix"
                :link-id="findLinkId(td)"
                :width="col.width"
                :min-width="col.minWidth"
                :max-width="col.maxWidth"
              />

              <!-- Actions -->
              <td :class="{ 'sticky-col': actions }">
                <div
                  v-if="actions"
                  class="zpl-table-action"
                >
                  <Dropdown
                    :list="actions"
                    :custom-payload="td"
                    :width="dropdownWidth"
                  >
                    <template slot="button">
                      <Button
                        type="tertiary"
                        size="small"
                        icon="DotsMenu"
                      />
                    </template>
                  </Dropdown>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Table extends Mixins(Logic) {}
</script>
