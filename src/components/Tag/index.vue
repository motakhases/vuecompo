<template>
  <div :class="['zpl-tag']">
    <span :class="{'with-btn' : btn}">
      {{ label }}
    </span>
    <button
      v-if="btn"
      class="clear-btn"
    >
      <Icon
        name="delete"
      />
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });

</script>
