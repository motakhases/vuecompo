<template>
  <component
    :is="linkDetector"
    :to="{ name: routeName, params: { id: linkId, ...params } }"
    :class="[
      'zpl-table-type-renderer',
      'zpl-table-cell',
      data.type === 'description' ? 'description' : null,
      data.leftAlign ? 'justify-end' : null
    ]"
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
          :icon="data.data.icon ? data.data.icon : 'product'"
          :img="data.data.image"
        />
      </div>
      <div class="text">
        <span :class="['title', {'td-disable' : data.disable}]"> {{ data.data.title }} </span>
        <small :class="['sub', {'td-disable' : data.disable}]"> {{ data.data.sub }} </small>
      </div>
    </div>

    <!--------------
        Price
    -------------->
    <div v-else-if="data.type === 'price'">
      {{ data.data.toLocaleString() }}
      <Label
        :class="['unit', {'td-disable' : data.disable}]"
        size="small"
        type="neutral"
        :text="$t('common.rial')"
      />
    </div>

    <!--------------
          Date
    -------------->
    <div
      v-else-if="data.type === 'date'"
      :class="['date', {'td-disable' : data.disable}]"
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
        :text="label.text"
        :icon="label.icon"
        :type="label.type"
      />
    </div>

    <!--------------
        Text
    -------------->
    <div v-else-if="data.type === 'text'" :class="{'td-disable' : data.disable}">
      {{ data.data }}
    </div>

    <!--------------
      Description
    -------------->
    <div
      v-else-if="data.type === 'description'"
      :class="['description', {'td-disable' : data.disable}]"
    >
      {{ data.data }}
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class TypeRenderer extends Mixins(Logic) {}
</script>
