<template>
  <div v-if="show" class="zpl-note">
    <TextBox
      v-model="noteText"
      size="large"
      :label="$t('session.show.note.title')"
      @onEmptyStat="onEmptyStat"
    />
    <ButtonGroup class="mt-md justify-between">
      <div>
        <Button
          :loading="loading"
          :disabled="isDisabled"
          icon="Trash"
          type="tertiary"
          size="medium"
          @click.native="onDeleteNote"
        />
      </div>
      <div>
        <Button
          :disabled="isDisabled"
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
          :disabled="isDisabled"
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
