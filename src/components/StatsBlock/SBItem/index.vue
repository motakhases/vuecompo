<template>
  <div :class="['zpl-sb-item ', { loading }]">
    <!-- loading -->
    <div v-if="loading" class="zpl-sb-item-cont flex-col">
      <div class="loading-title">
        <Skeleton type="body" class="w-[64px] h-[12px]" />
      </div>
      <div class="loading-title">
        <Skeleton type="body" class="w-[168px] h-[20px]" />
      </div>
      <div class="loading-title">
        <Skeleton type="body" class="w-[120px] h-[12px]" />
      </div>
      <div class="loading-title pt-xs">
        <Skeleton type="body" class="w-[46px] h-[12px]" />
      </div>
    </div>

    <!-- content -->
    <div v-else class="zpl-sb-item-cont flex-col">
      <span class="title" v-if="title">
        {{ title }}
        <Tooltip v-if="info" :text="info" indicator position="topCenter">
            <Icon :name="infoType" class="zpl-reciept-icon" />
        </Tooltip>
      </span>

<!--      <span class="content">
        <slot name="content" class="font-YekanBakh"/>
      </span>

      <span class="caption">
        <slot name="caption" class="font-sans"/>
      </span>-->
      <span v-if="body" class="body">
        <slot name="body"/>
      </span>
      <Button v-if="link" :href="link" text="مشاهده" type="primaryText" class="pt-xs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import logic from './logic';

@Component
export default class StatsBlockItem extends Mixins(logic) {}
</script>
