<template>
  <div class="zpl-uploaded-box" v-if="uploadedList.length">
    <div
      class="zpl-uploaded"
      v-for="(file, index) in uploadedList"
      :key="index"
      :removeFileHandler="removeFileHandler"
    >
      <!-- icon -->
      <Icon name="clip" v-if="hasIcon" />

      <!-- image -->
      <img v-else :src="file.image" />

      <!-- name -->
      <div class="zpl-uploaded-name">{{ file.name }}</div>

      <!-- close button -->
      <Button
        v-if="file.status === 'uploading'"
        icon="Delete"
        type="tertiary"
        size="medium"
        @click.native="removeFileHandler(file)"
      />
      <div v-else class="flex items-center gap-2xs">
        <!-- reload button -->
        <Button
          v-if="file.status === 'error'"
          icon="Reload"
          type="tertiary"
          size="medium"
          @click.native="addFileManually(file)"
        />

        <!-- delete button -->
        <Button
          v-if="file.status === 'error' || file.status === 'success'"
          icon="Trash"
          type="tertiary"
          size="medium"
          @click.native="removeFileHandler(file)"
        />
      </div>

      <!-- progress bar -->
      <div class="zpl-uploaded-progress" v-if="file.status === 'uploading'">
        <ProgressBar size="thin" :percent="file.progress ? file.progress : '0'" />
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
