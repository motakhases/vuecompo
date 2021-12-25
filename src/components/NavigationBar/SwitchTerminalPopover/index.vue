<template>
  <div class="zpl-nav-popover-container">
    <!-- Active terminal -->
    <SwitchTerminal
      title="عنوان درگاه"
      link="zarinp.al/getway"
      icon="terminal"
    />

    <!-- Terminal list -->
    <div class="zpl-nav-popover">
      <!-- Title -->
      <Overview
        link="overview"
        active
      >
        نمای کلی
      </Overview>

      <!-- Terminals -->
      <SwitchTerminalItem
        v-for="(terminal, index) in terminals"
        :key="index"
        :title="terminal.name"
        :link="terminal.domain"
        icon="terminal"
        :state="terminal.status"
      />

      <!-- Add new terminal -->
      <Create link="/home">
        ایجاد درگاه جدید
      </Create>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
