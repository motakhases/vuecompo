<template>
  <div
    v-if="isOpen"
    :class="['zpl-topbar-terminal-list', { 'show' : isOpen }]"
  >
    <div class="modal">
      <div>
        <!-- Title -->
        <Overview
          link="overview"
          active
        >
          نمای کلی
        </Overview>

        <!-- Terminals -->
        <div class="terminal-items">
          <SwitchTerminalItem
            v-for="(terminal, index) in terminals"
            :key="index"
            :title="terminal.name"
            :link="terminal.domain"
            icon="terminal"
            :state="terminal.status"
          />
        </div>

        <!-- Add new terminal -->
        <Create link="/home">
          ایجاد درگاه جدید
        </Create>
      </div>
    </div>
    <div
      class="backdrop"
      @click="toggle"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });

</script>
