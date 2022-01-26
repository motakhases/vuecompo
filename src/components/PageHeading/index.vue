<template>
  <div
    ref="pageHeading"
    :class="['zpl-page-heading', {'fixed-page-heading':stickHeading}]"
  >
    <div
      v-if="returnBTN"
      class="return-btn"
      @click="router.go(-1)"
    >
      <Button
        icon="ArrowRight"
        type="tertiary"
      />
    </div>
    <div class="heading-content">
      <span class="title">
        {{ title }}
      </span>
      <div
        v-for="(status, index) in statuses"
        :key="index"
        class="statuses"
      >
        <Status v-bind="status" />
      </div>
      <p
        v-show="desc.length>0 && !stickHeading"
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
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
