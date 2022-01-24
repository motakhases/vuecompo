<template>
  <div class="zpl-timeline">
    <div class="zpl-timeline-icon">
      <Icon :name="icon" />
    </div>
    <div class="zpl-timeline-cart">
      <div class="zpl-timeline-title">
        <span>{{ title }}</span>
        <Label
          v-if="labelText"
          size="small"
          :type="labelType"
          :text="labelText"
        />
      </div>
      <div class="zpl-timeline-sub">
        {{ subText }}
      </div>
      <div class="zpl-timeline-sub">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
