<template>
  <div
    :class="['zpl-avatar', size]"
  >
    <!-- show image if we have img prop -->
    <div
      v-if="img"
      :class="['zpl-avatar-img', size]"
      :style="{ backgroundImage: 'url(' + img + ')' }"
    />
    <!-- else show icon -->
    <div
      v-else
      :class="['zpl-avatar-icon', size]"
    >
      <!-- if size === small show profile icon -->
      <Icon
        v-if="size === 'small'"
        name="profile"
      />
      <!-- otherwise show profileFill icon -->
      <Icon
        v-else
        name="profileFill"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
