<template>
  <div
    :class="['zpl-status', type , {icon} ]"
  >
    <span
      v-if="indicator"
      class="circle"
    />
    <Icon
      v-if="icon"
      :name="icon"
    />
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
