<template>
  <div v-if="show" :class="['zpl-inline-msg', type]">
    <Icon name="warning" class="zpl-warning-icon" />
    <div class="zpl-inline-msg-main">
      <div class="zpl-inline-msg-header">
        <div class="zpl-inline-msg-title">
          {{ title }}
        </div>
        <Icon v-if="toggle" name="delete" @click.native="showAlertHandler" />
      </div>
      <div v-if="description" class="zpl-inline-msg-des">
        {{ description }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
