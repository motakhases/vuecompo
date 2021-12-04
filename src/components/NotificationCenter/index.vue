<template>
  <div class="zpl-notification-modal">
    <div
      :class="['zpl-notification-center']"
    >
      <div class="notif-header">
        <div v-show="!showArchives">
          <Icon
            name="delete"
            class="close-icon"
          />
          <Icon
            name="clockRefresh"
            class="archive-icon"
            @click.native="showArchives=true"
          />
        </div>
        <div v-show="showArchives">
          <Icon
            name="arrowRight"
            class="return-icon"
            @click.native="showArchives=false"
          />
          <h3 class="archive-title">
            آرشیو اطلاعیه‌ها
          </h3>
        </div>
      </div>
      <Tabs
        v-show="!showArchives"
        :fill-container="true"
      >
        <Tab
          title="اعلانات"
        >
          <div v-if="todayCards(notifs).length">
            <span class="notif-period">
              امروز
            </span>
            <card
              :cards="todayCards(notifs)"
            />
          </div>
          <div v-if="yesterdayCards(notifs).length">
            <span class="notif-period">
              دیروز
            </span>
            <card
              :cards="yesterdayCards(notifs)"
            />
          </div>
          <div v-if="thisWeekCards(notifs).length">
            <span class="notif-period">
              هفته جاری
            </span>
            <card
              :cards="thisWeekCards(notifs)"
            />
          </div>
          <noNotif v-else />
        </Tab>
        <Tab
          title="اطلاعیه‌ها"
        >
          <div v-if="todayCards(announcements).length">
            <span class="notif-period">
              امروز
            </span>
            <card
              :cards="todayCards(announcements)"
            />
          </div>
          <div v-if="yesterdayCards(announcements).length">
            <span class="notif-period">
              دیروز
            </span>
            <card
              :cards="yesterdayCards(announcements)"
            />
          </div>
          <div v-if="thisWeekCards(announcements).length">
            <span class="notif-period">
              هفته جاری
            </span>
            <card
              :cards="thisWeekCards(announcements)"
            />
          </div>
          <noNotif
            v-else
            notif-type="اطلاعیه‌ای"
          />
        </Tab>
      </Tabs>
      <div
        v-show="showArchives"
        class="announce-archives"
      >
        <card
          v-if="archiveAnnouncements().length"
          :cards="archiveAnnouncements()"
        />
        <noNotif
          v-else
          notif-type="اطلاعیه‌ای"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { now, yesterday, beforeDays } from '@/utils/momentCustom';
import './style.scss';
import card from './card/index.vue';
import noNotif from './NoNotif/index.vue';
import Tabs from '../Tabs/index.vue';
import Tab from '../Tabs/Tab/index.vue';
import Icon from '../Icon/index.vue';

export default ({
  name: 'NotificationCenter',
  components: {
    card, noNotif, Tabs, Tab, Icon,
  },
  props: {
    announcements: {
      type: Array,
      default: () => [],
    },
    notifs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showArchives: false,
    };
  },
  methods: {
    todayCards(data) {
      console.log(beforeDays());
      return data.filter((item) => item.date === now('YYYY-M-D'));
    },
    yesterdayCards(data) {
      return data.filter((item) => item.date === yesterday('YYYY-M-D'));
    },
    thisWeekCards(data) {
      const thisWeekNotifs = data.filter((item) => item.date >= beforeDays(6, 'YYYY-M-D'));
      return thisWeekNotifs.filter((item) => item.date <= beforeDays(2, 'YYYY-M-D'));
    },
    archiveAnnouncements() {
      return this.announcements.filter((item) => item.date < beforeDays(6, 'YYYY-M-D'));
    },
  },
});

</script>
