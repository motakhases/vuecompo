<template>
  <div class="zpl-reciept">
    <ul class="zpl-reciept-list">
      <li class="zpl-reciept-item" v-for="option in options" :key="option.id">
        <div class="zpl-reciept-title">
          {{ option.text }}
          <Tooltip v-if="option.infoText" :text="option.infoText" indicator position="topCenter">
            <Icon name="Info" class="zpl-reciept-icon" />
          </Tooltip>
        </div>
        <span class="zpl-reciept-divider" />
        <div class="zpl-reciept-text">{{ option.sub }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
