<template>
  <Modal
    :title="$t('notif_settings.theme')"
    v-if="open"
    @close="toggleModal"
    closable
    width="400px"
  >
    <div slot="body" class="px-md pt-md pb-xl">
      <div class="grid grid-cols-12 gap-xl mb-xl">
        <RadioCard
          :title="$t('notif_settings.light')"
          :image="lightImage"
          v-model="mode"
          val="light"
          :disabled="systemTheme"
          class="col-span-6"
        />
        <RadioCard
          :title="$t('notif_settings.dark')"
          :image="darkImage"
          v-model="mode"
          val="dark"
          :disabled="systemTheme"
          class="col-span-6"
        />
      </div>
      <Toggle v-model="systemTheme" :text="$t('notif_settings.settings')" />
    </div>
  </Modal>
</template>

<script>
import Vue from "vue";
import logic from "./logic";
import "./style.scss";

export default Vue.extend({ mixins: [logic] });
</script>
