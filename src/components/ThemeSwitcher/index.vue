<template>
  <Modal :title="$t('notif_settings.theme')" v-if="open" @close="toggleModal" closable width="400px">
    <div slot="body" class="px-md pt-md pb-xl">
      <div class="zpl-theme-box">
        <RadioCard
          :title="$t('notif_settings.light')"
          icon="LightTheme"
          v-model="mode"
          val="light"
          :disabled="systemTheme"
          class="zpl-theme-icon"
        />
        <RadioCard
          :title="$t('notif_settings.dark')"
          icon="DarkTheme"
          v-model="mode"
          val="dark"
          :disabled="systemTheme"
          class="zpl-theme-icon"
        />
      </div>
      <Toggle v-model="systemTheme" :text="$t('notif_settings.settings')" />
    </div>
  </Modal>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
