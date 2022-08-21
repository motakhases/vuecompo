<template>
  <div class="zpl-topbar-container">
    <div class="zpl-topbar-right-side">
      <Button
        v-if="hasMenu"
        icon="menuBurger"
        type="tertiary"
        size="medium"
        @click.native="$emit('toggleMenu')"
      />
      <!-- <Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        /> -->
      <div class="zpl-topbar-logo">
        <Logo size="medium" name="zarinpal" type="logo" language="fa" />
      </div>
      <div class="zpl-topbar-terminal-btn">
        <Button
          after-icon="AngleDown"
          type="tertiary"
          size="medium"
          :text="activeTerminal"
          @click.native="toggleTerminalList"
        />
      </div>
    </div>
    <div class="zpl-topbar-left-side">
      <div class="zpl-topbar-question-btn">
        <Button icon="questionCircle" type="tertiary" size="medium" />
      </div>
      <Notification badge="1" @click.native="$emit('showNotifs')" />
      <Dropdown :list="profileList" width="256px">
        <template slot="button">
          <Button type="tertiary" size="medium" icon="profile" />
        </template>
      </Dropdown>
    </div>
    <TerminalList
      v-if="hasMenu"
      :terminals="terminals"
      :is-open="showTerminalList"
      :toggle="toggleTerminalList"
      @terminalClick="terminalClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
