<template>
  <div class="zpl-list-menu">
    <button
      v-for="(item, i) in items"
      :key="i"
      :class="['zpl-list-menu-item', { 'active': item.active }]"
      @click="itemClicked(item.id)"
    >
      {{ item.title }}

      <div>
        <span class="amount" v-if="item.amount && item.amount > 0">
          ({{ item.amount }})
        </span>

        <Icon class="icon" name="AngleLeft" />
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
