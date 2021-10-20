<template>
  <div class="rtl">
    <button
      type="button"
      class="zpl-user-profile"
    >
      <Icon
        name="profile"
        class="zpl-button-icon"
      />
      <span class="zpl-user-profile-username">
        {{ username }}
      </span>
      <Icon
        name="angleDown"
        class="zpl-button-icon"
      />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
