<template>
  <div dir="rtl">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class YourComponent extends Vue {
 msg = 'welcome to my app'
}

</script>

<style>
body {
  @apply bg-background
}
</style>
