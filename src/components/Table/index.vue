<template>
  <div :class="['zpl-table']">
    <!-- Small view - Card -->
    <template v-if="isLoadCards && data && data.length">
      <Card
        v-for="(td, index) in data"
        :key="index"
        :td="td"
        :columns="columns"
        :bordered="bordered"
        :actions="actions"
        :route-name="routeName"
        :link-id="findLinkId(td)"
        :handleClickFromOutside="findClickFunc(td)"
        :params="params"
      />
    </template>
    <!-- Loading -->
    <LoadingTable
      v-if="!isLoadCards && loading"
      :rows="loadingNumber"
      :cols="columns"
      :hasSubCustom="hasSubCustom"
      :hasCustom="hasCustom"
      :hasImage="hasImage"
      :actions="actions"
      :class="[ { bordered } ]"
    />

    <!-- Large view - Table -->
    <template v-if="!loading && !isLoadCards && data && data.length">
      <div
        :class="[
          'zpl-table-box',
          { bordered }
        ]"
         ref="table"
      >
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
                  v-model="model"
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
                :route-name="routeName"
                :link-id="findLinkId(td)"
                :handleClickFromOutside="findClickFunc(td)"
                :width="col.width"
                :min-width="col.minWidth"
                :max-width="col.maxWidth"
                :params="params"
              />
              <!-- Actions -->
              <td :class="{ 'action-col': actions, 'stick': tableOverflow }">
                <div
                  v-if="actions && handleSingleAction(td)"
                  class="zpl-table-action"
                >
                  <div :class="['outside-action', {'outside-show': actions.length === 1}]">
                    <Button
                      type="tertiary"
                      :class="[item.color ? `text-${item.color}` : null]"
                      size="small"
                      :icon="item.icon"
                      v-for="(item, index) in actions.filter((i)=>i.icon).slice(0, 2)"
                      :key="index"
                      @click.native="item.action(td)"
                    />
                  </div>
                  <Dropdown
                    v-if="actions.length>1"
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

    <!-- Empty State -->
    <Empty-state
    v-if="(!data && !loading) || (data && !data.length && !loading)"
    :title="emptyTitle"
    :caption="emptyCaption"
    :inCard="inCard"
    :image="image"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Table extends Mixins(Logic) {}
</script>
