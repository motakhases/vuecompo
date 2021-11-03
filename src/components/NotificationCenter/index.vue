<template>
  <div class="zpl-notification-modal">
    <div
      :class="['zpl-notification-center']"
    >
      <Tabs
        dir="rtl"
        :fill-container="true"
      >
        <Tab
          title="تست"
        >
          <div>
            salam
          </div>
        </Tab>
        <Tab
          title="۲تست"
        >
          <card v-if="cards.length" />
          <noNotif v-else />
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>

import './style.scss';
import card from './card/index.vue';
import noNotif from './NoNotif/index.vue';
import Tabs from '../Tabs/index.vue';
import Tab from '../Tabs/Tab/index.vue';

export default ({
  name: 'NotificationCenter',
  components: {
    card, noNotif, Tabs, Tab,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
});

</script>
