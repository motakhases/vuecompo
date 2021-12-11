<template>
  <div class="zpl-user-card-stack">
    <TaskItem
      v-for="{ id, complete, before, disabled, link, text } in items"
      :key="id"
      :complete="complete"
      :before="before"
      :disabled="disabled"
      :link="link"
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
