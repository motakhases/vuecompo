<template>
  <div class="loading">
    <div class="title-box">
      <div class="title skeleton" />
    </div>
     <div class="text-box">
      <div class="text skeleton" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ClipLoading extends Vue {}
</script>
