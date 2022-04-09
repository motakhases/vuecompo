<template>
  <div
    ref="pageHeading"
    :class="['zpl-page-heading', {'fixed-page-heading':stickHeading}]"
  >
    <div class="container page-heading-container">
      <div
        v-if="returnBtn"
        class="return-btn"
        @click="returnFunction"
      >
        <Button
          icon="ArrowRight"
          type="tertiary"
        />
      </div>
      <div class="heading-content">
        <div class="flex items-center gap-x-xs">
          <span class="title">
            {{ title }}
          </span>
          <div class="status-container">
            <div
              v-for="(status, index) in statuses"
              :key="index"
            >
              <Status v-bind="status" />
            </div>
          </div>
        </div>

        <p
          v-show="desc && desc.length>0 && !stickHeading"
          class="desc"
        >
          {{ desc }}
        </p>
      </div>
      <div
        class="heading-btn"
      >
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
