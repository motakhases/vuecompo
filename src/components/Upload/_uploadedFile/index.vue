<template>
  <div class="zpl-uploaded">
    <img :src="file.image" />
    <!-- <Icon name="clip" v-else /> -->
    <div class="zpl-uploaded-name">{{ file.name }}</div>
    <Button
      v-if="file.status === 'loading'"
      icon="Delete"
      type="tertiary"
      size="medium"
    />
    <div v-else>
      <Button
        v-if="file.status === 'failed'"
        icon="Reload"
        type="tertiary"
        size="medium"
      />
      <Button icon="Trash" type="tertiary" size="medium" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
