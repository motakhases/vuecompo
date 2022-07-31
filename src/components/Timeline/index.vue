<template>
  <div :class="[{ 'zpl-timeline': !loading }]">
    <!-- loading -->
    <Loading  :loadingNumber="loadingNumber" v-if="loading" />

    <div v-if="!loading" class="zpl-timeline-icon">
      <Icon
        :name="icon"
        :class="
          icon === 'CheckmarkCircle'
            ? 'blue'
            : icon === 'DollarFill'
            ? 'green'
            : icon === 'MessageEditFill'
            ? 'warning'
            : null
        "
      />
    </div>
    <div v-if="!loading" class="zpl-timeline-cart">
      <div class="zpl-timeline-title">
        <span>{{ title }}</span>
        <Label
          v-if="labelText"
          size="small"
          :type="labelType"
          :text="labelText"
        />
      </div>
      <div class="zpl-timeline-sub" v-if="subText">
        {{ subText }}
      </div>
      <div class="zpl-timeline-sub" v-if="date">
        {{ date | jalaali }}
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
