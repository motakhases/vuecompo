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
      <Icon
        name="arrowRight"
        class="return-icon"
      />
    </div>
    <div class="heading-content">
      <span class="title">
        {{ title }}
      </span>
      <p
        v-show="desc.length>0 && !stickHeading"
        class="desc"
      >
        {{ desc }}
      </p>
    </div>
    <div
      v-if="hasButton"
      class="heading-btn"
    >
      <btn
        :on-click="btnOperate"
        v-bind="btn"
      >
        {{ btn.label }}
      </btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
