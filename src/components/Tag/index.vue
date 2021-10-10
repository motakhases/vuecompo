<template>
  <div :class="['zpl-tag']">
    <span :class="{'with-btn' : btn}">
      <slot />
    </span>
    <div
      v-if="btn"
      class="zpl-tag-icon"
    />
  </div>
</template>

<script>

import './style.scss';

export default ({
  name: 'Tag',
  props: {
    btn: {
      type: Boolean,
      default: false,
    },
  },
});

</script>
