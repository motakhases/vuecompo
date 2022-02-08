<template>
  <div class="zpl-table-type-renderer">
    <!-- Custom -->
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

    <!-- Number -->
    <div v-else-if="data.type === 'price'">
      {{ data.data.toLocaleString() }}
      <Label
        class="unit"
        size="small"
        type="neutral"
        text="ریال"
      />
    </div>

    <!-- Date -->
    <div v-else-if="data.type === 'date'">
      {{ data.data | JdateName }}
    </div>

    <!-- Label -->
    <div v-else-if="data.type === 'status'">
      <Status
        v-for="(label, labelIndex) in data.data"
        :key="labelIndex"
        :text="label.title"
        :type="label.type"
      />
    </div>

    <div v-else-if="data.type === 'text'">
      {{ data.data }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';

@Component
export default class typeRenderer extends Mixins(Logic) {}
</script>
