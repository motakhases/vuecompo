<template>
  <div dir="rtl">
    <Button
      text="Open Modal"
      @click.native="$refs.modal.open()"
    />
    <NotificationCenter ref="modal" />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Button from '@/components/Button/index.vue';
import NotificationCenter from '@/components/NotificationCenter/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Button,
    NotificationCenter,
  },
});
</script>

<style>
body {
  @apply bg-background
}
</style>
