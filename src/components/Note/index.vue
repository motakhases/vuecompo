<template>
  <div v-if="show" class="zpl-note">
    <ButtonGroup class="mb-md justify-end">
      <Button
        type="secondary"
        :text="$t('common.cancel')"
        size="medium"
        @click.native="cancelNote"
      />
      <Button
        type="primary"
        :text="$t('common.save')"
        size="medium"
        :loading="loading"
        :disabled="!model"
        @click.native="addNote"
      />
    </ButtonGroup>
    <TextBox
      v-model="model"
      size="large"
      :label="$t('session.show.note.title')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
