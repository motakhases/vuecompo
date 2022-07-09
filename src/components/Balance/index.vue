<template>
  <div class="zpl-balance">
    <div class="zpl-balance-title">
      {{ title }}
      <Icon name="Reload" />
    </div>
    <div>
      <div>
        {{amount|numberFormat}}
        <Label
        size="small"
        type="neutral"
        :text="$t('common.rial')" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
