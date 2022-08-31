<template>
  <component
    :is="linkDetector"
    :to="{ name: routeName, params: { id: linkId, ...params } }"
    :class="[
      'zpl-table-type-renderer',
      'zpl-table-cell',
      data.type === 'description' ? 'description' : null,
      data.leftAlign ? 'justify-end' : null,
      handleClickFromOutside ? 'cursor-pointer' : null
    ]"
    @click="handleClickFromOutside ? handleClickFromOutside() : null"
  >
    <!--------------
        Custom
    -------------->
    <div v-if="data.type === 'custom'" class="custom">
      <div
        v-if="
          data.data.image ||
          data.data.image === '' ||
          data.data.logo ||
          data.data.icon ||
          data.data.pspLogo
        "
        class="image"
      >
        <Thumbnail
          :icon="data.data.icon"
          :img="data.data.image"
          :logo="data.data.logo"
          :pspLogo="data.data.pspLogo"
        />
      </div>
      <div
        class="image"
        v-else-if="data.data.avatarImage || data.data.avatarImage === ''"
      >
        <Avatar size="medium" :img="data.data.avatarImage" />
      </div>
      <div class="text">
        <span
          :class="[
            'title',
            { 'td-disable': data.disable, 'font-Mono': data.data.titleMono },
            data.data.titleClasses
          ]"
        >
          {{ data.data.title }}
        </span>
        <small
          :class="[
            'sub',
            { 'td-disable': data.disable, 'font-Mono': data.data.subMono },
            data.data.subClasses
          ]"
        >
          {{ data.data.sub }}
        </small>
      </div>
    </div>

    <!--------------
        Price
    -------------->
    <div v-else-if="data.type === 'price'">
      {{ data.data.toLocaleString() }}
      <Label
        :class="[
          'unit',
          { 'td-disable': data.disable, 'font-Mono': data.mono },
        ]"
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
      :class="['date', { 'td-disable': data.disable }]"
    >
      {{ data.data | tableDateFormat }}
    </div>

    <!--------------
        Status
    -------------->
    <div v-else-if="data.type === 'status'" class="status">
      <Status
        v-for="(label, labelIndex) in data.data"
        :key="labelIndex"
        :text="label.text"
        :icon="label.icon"
        :type="label.type"
      />
    </div>

    <!--------------
        label
    -------------->
    <div v-else-if="data.type === 'label'" class="status">
      <Label
        v-for="(label, labelIndex) in data.data"
        :key="labelIndex"
        size="small"
        :type="label.type"
        :text="label.text"
      />
    </div>

    <!--------------
        Text
    -------------->
    <div
      v-else-if="data.type === 'text'"
      :class="[{ 'td-disable': data.disable, 'font-Mono': data.mono }, data.classes]"
    >
      {{ data.data }}
    </div>

    <!--------------
      Description
    -------------->
    <div
      v-else-if="data.type === 'description'"
      :class="[
        'description',
        { 'td-disable': data.disable, 'font-Mono': data.mono },
        data.classes
      ]"
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
