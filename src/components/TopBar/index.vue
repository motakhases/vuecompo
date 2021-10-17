<template>
  <div class="rtl">
    <div class="zpl-topbar-container">
      <div class="zpl-topbar-right-side">
        <Icon
          name="angleDown"
          class="zpl-topbar-menu"
        />

        <div>
          <a href="#1">logo</a>
        </div>
      </div>
      <div class="zpl-topbar-right-side">
        fd
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
