<template>
  <div class="zpl-nav-popover-container" @keydown="onKeyDown">
    <!-- Active terminal -->
    <div @click="handleShowPopover" ref="terminal">
      <SwitchTerminal
        :title="switcher.title"
        :link="switcher.link"
        :icon="switcher.icon"
        :isFocused="isFocused"
        :img="switcher.img"
      />
      <div class="zpl-nav-popover" v-show="showPopover" @click="handleHidePopover">
        <div>
          <!-- Terminals -->
          <div class="zpl-nav-terminal-items" :style="{ maxHeight: `${maxHeightList}px` }">
            <SwitchTerminalItem
              v-for="(terminal, index) in terminals"
              :id="terminal.id"
              :key="index"
              :active="terminal.id === activeTerminal.id"
              :pinned="terminal.pinned"
              :title="terminal.name"
              :link="terminal.domain"
              :route="terminal.route"
              :img="terminal.logo + logoAddress"
              :state="terminal.status"
              icon="terminal"
              v-on="$listeners"
              ref="switchTerminalItem"
            />
          </div>

          <!-- Add new terminal -->
          <Create link="/home">
            {{ $t('terminal.create.new') }}
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
