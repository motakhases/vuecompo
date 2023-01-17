<template>
  <ul class="zpl-popover">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="['popover-item', { 'negative-item': negative }]"
      @click="select(item.value)"
    >
      <Icon v-if="iconName" :name="iconName" class="zpl-button-icon" />
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
// usage: it should be child of this component => div.absolute
// and width of that is equal to parrent(last comment) div width

import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
