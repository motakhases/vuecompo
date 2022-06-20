<template>
  <div class="zpl-nav-popover-container">
    <!-- Active terminal -->
    <div @click="handleShowPopover" ref="terminal">
      <SwitchTerminal
        :title="switcher.title"
        :link="switcher.link"
        :icon="switcher.icon"
      />
      <div class="zpl-nav-popover" v-show="showPopover" @click="handleHidePopover">
        <div>
          <!-- Terminals -->
          <div class="zpl-nav-terminal-items">
            <SwitchTerminalItem
              v-for="(terminal, index) in terminals"
              :id="terminal.id"
              :key="index"
              :active="terminal.id === activeTerminal.id"
              :title="terminal.name"
              :link="terminal.domain"
              :route="terminal.route"
              :img="terminal.logo"
              :state="terminal.status"
              icon="terminal"
              v-on="$listeners"
            />
          </div>

          <!-- Add new terminal -->
          <Create link="/home">
            {{ $t("terminal.create.new") }}
          </Create>
        </div>
      </div>
    </div>

    <!-- Terminal list -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
