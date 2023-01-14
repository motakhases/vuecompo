<template>
  <div v-if="show" class="zpl-note">
    <TextBox
      v-model="noteText"
      size="large"
      :label="$t('session.show.note.title')"
      ref="myTextBox"
    />
    <ButtonGroup class="mt-md justify-between">
      <div>
        <Button
          :loading="loading"
          :disabled="disabled"
          icon="Trash"
          type="tertiary"
          size="medium"
          @click.native="$refs.myTextBox.doClean()"
        />
      </div>
      <div>
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
          :disabled="disabled"
          @click.native="addNote"
        />
      </div>
    </ButtonGroup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
