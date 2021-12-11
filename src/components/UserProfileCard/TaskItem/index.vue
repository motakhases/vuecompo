<template>
  <div class="zpl-user-card-item">
    <CheckMark
      :complete="complete"
      :before="before"
    />
    <TaskAction
      :disabled="disabled"
      :link="link"
      :complete="complete"
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
