<template lang="html">
  <div v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    warn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },

};
</script>
