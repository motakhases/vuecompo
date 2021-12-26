<template>
  <div
    class="zpl-user-card-level"
  >
    <span v-if="text">{{ text }}</span>
    <Label
      v-for="{ id, type, size, text } in list"
      :key="id"
      :type="type"
      :size="size"
      :text="text"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
