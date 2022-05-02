<template>
  <div class="zpl-uploaded">
    <img :src="image" v-if="image" />
    <Icon name="clip" v-else />
    <div class="zpl-uploaded-name">name</div>
    <Button
      v-if="status === 'loading'"
      icon="Delete"
      type="tertiary"
      size="medium"
    />
    <div v-else>
      <Button
        v-if="status === 'failed'"
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
