<template>
  <Modal
    title="فیلتر"
    v-if="isOpen"
    @close="toggle"
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
        text="حذف"
        @click.native="clearQuery"
      />
      <Button
        type="primary"
        size="medium"
        text="اعمال"
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
