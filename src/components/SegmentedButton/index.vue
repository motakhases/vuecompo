<template>
  <div :class="['zpl-segment-group' , { fill } ]">
    <Button
      v-for="item in items"
      :key="item.id"
      :text="item.text"
      :active="item.active"
      @click.native="item.click"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
