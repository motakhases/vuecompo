<template>
  <Modal
    :title="$t('common.export.filter')"
    @close="toggle"
    v-if="isOpen"
    width="328px"
  >
    <template slot="body">
      <div class="zpl-filters">
        <slot />
      </div>
    </template>
    <template slot="leftFooter">
      <Button
        type="secondary"
        size="medium"
        :text="$t('common.delete')"
        @click.native="clearQuery"
      />
      <Button
        type="primary"
        size="medium"
        :text="$t('common.apply')"
        @click.native="filter"
      />
    </template>
  </Modal>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Logic from './logic';
import './style.scss';

@Component
export default class Indicator extends Mixins(Logic) {}
</script>
