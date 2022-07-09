<template>
  <div class="zpl-balance">
    <div class="zpl-balance-title">
      {{ title }}
      <Icon name="Reload" @click.native="reloadHandler" />
    </div>
    <div class="flex items-center gap-sm">
      <div class="zpl-balance-amount">
        {{ amount | numberFormat }}
        <Label
        size="small"
        type="neutral"
        :text="$t('common.rial')" />
      </div>
      <Button icon="plus" size="small" type="primary-LE" @click.native="addHandler" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
