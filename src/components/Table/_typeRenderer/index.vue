<template>
  <div
    :class="[
      'zpl-table-type-renderer',
      data.type === 'description' ? 'description' : '',
    ]"
  >
    <!--------------
          action
      -------------->
    <div
      v-if="data.type === 'action'"
      class="zpl-table-action"
    >
      <Dropdown :list="data.data">
        <template slot="button">
          <Button
            type="tertiary"
            size="small"
            icon="DotsMenu"
          />
        </template>
      </Dropdown>
    </div>
    <component
      :is="linkComponentDetector"
      :href="link"
      class="zpl-table-cell"
      v-else
    >
    <!--------------
        Custom
    -------------->
      <div
        v-if="data.type === 'custom'"
        class="custom"
      >
        <div
          v-if="data.data.image || data.data.image === ''"
          class="image"
        >
          <Thumbnail
            icon="product"
            :img="data.data.image"
          />
        </div>
        <div class="text">
          <span class="title"> {{ data.data.title }} </span>
          <small class="sub"> {{ data.data.sub }} </small>
        </div>
      </div>

      <!--------------
          Number
      -------------->
      <div v-else-if="data.type === 'price'">
        {{ data.data.toLocaleString() }}
        <Label
          class="unit"
          size="small"
          type="neutral"
          text="ریال"
        />
      </div>

      <!--------------
            Date
      -------------->
      <div
        v-else-if="data.type === 'date'"
        class="date"
      >
        {{ data.data | tableDateFormat }}
      </div>

      <!--------------
          Status
      -------------->
      <div
        v-else-if="data.type === 'status'"
        class="status"
      >
        <Status
          v-for="(label, labelIndex) in data.data"
          :key="labelIndex"
          :text="label.title"
          :icon="label.icon"
          :type="label.type"
        />
      </div>
      <!--------------
          Text
      -------------->
      <div v-else-if="data.type === 'text'">
        {{ data.data }}
      </div>
      <!--------------
          description
      -------------->
      <div
        v-else-if="data.type === 'description'"
        class="description"
      >
        {{ data.data }}
      </div>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class typeRenderer extends Mixins(Logic) {}
</script>
