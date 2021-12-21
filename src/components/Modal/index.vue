<template>
  <div
    v-if="isOpen"
    :class="['zpl-modal', { 'show' : isOpen }]"
  >
    <div class="modal">
      <div class="modal-header">
        <h1>{{ title }}</h1>
        <Icon
          name="delete"
          class="cursor-pointer"
          @click.native="toggle"
        />
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
    <div
      ref="backdropRef"
      class="backdrop"
      @click="outsideClick"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });

</script>
