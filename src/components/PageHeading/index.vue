<template>
  <div
    ref="pageHeading"
    :class="['zpl-page-heading', { 'fixed-page-heading': stickHeading }]"
  >
    <Loading
      v-if="loading"
      :smallContainer="smallContainer"
      :returnBtn="returnBtn"
      :desc="desc && !stickHeading"
      :button="$slots.buttons"
    />
    <div
      :class="[
        'page-heading-container',
        smallContainer ? 'small-container' : 'container',
      ]"
      v-else
    >
      <div v-if="returnBtn" class="return-btn" @click="returnFunction">
        <Button icon="ArrowRight" type="tertiary" size="medium" />
      </div>
      <div :class="['heading-content', { ' w-full': returnBtn }]">
        <div class="flex items-center gap-x-xs">
          <span class="title">
            {{ title }}
          </span>
          <div class="status-container">
            <div v-for="(status, index) in statuses" :key="index">
              <Status v-bind="status" />
            </div>
          </div>
        </div>

        <p v-show="desc && desc.length > 0 && !stickHeading" class="desc">
          {{ desc }}
        </p>
      </div>
      <div class="heading-btn">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
