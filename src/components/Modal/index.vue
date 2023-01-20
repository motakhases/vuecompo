<template>
  <div :class="['zpl-modal']">
    <div class="zpl-modal-box" :style="[{ width: finalWidth, maxHeight }]">
      <!-- header -->
      <div class="zpl-modal-header">
        <h1>{{ title }}</h1>
        <Button icon="delete" type="tertiary" size="medium" class="cursor-pointer" @click.native="close" />
      </div>

      <!-- body -->
      <div class="zpl-modal-body">
        <slot name="body" />
      </div>

      <!-- footer -->
      <div class="zpl-modal-footer" v-if="$slots.leftFooter || $slots.leftFooter || $slots.footer">
        <!-- right side -->
        <div v-if="$slots.rightFooter" class="zpl-modal-footer-container">
          <slot name="rightFooter" />
        </div>
        <slot name="footer" />
        <!-- left side -->
        <div v-if="$slots.leftFooter" class="zpl-modal-footer-container left">
          <slot name="leftFooter" />
        </div>
      </div>
    </div>
    <div ref="backdropRef" class="backdrop" @click="closable ? close() : null" />
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
