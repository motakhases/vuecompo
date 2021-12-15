<template>
  <div>
    <button
      type="button"
      class="zpl-user-profile"
      @click="showPopoverHandler"
      @focusout="focusoutHandler"
    >
      <Icon
        name="profile"
        class="zpl-button-icon"
      />
      <span class="zpl-user-profile-username zpl-user-profile-desktop">
        {{ username }}
      </span>
      <Icon
        name="angleDown"
        class="zpl-button-icon zpl-user-profile-desktop"
      />
    </button>
    <slot v-if="show" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
