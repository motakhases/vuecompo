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
        {{ $t('common.overview') }}
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
            v-on="$listeners"
          />
        </div>

        <!-- Add new terminal -->
        <Create link="/home">
          {{ $t('terminal.create.new') }}
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
