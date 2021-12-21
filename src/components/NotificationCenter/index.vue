<template>
  <div :class="['zpl-notification-modal', { 'show': isOpen }]">
    <div
      v-click-outside="close"
      :class="['zpl-notification-center']"
    >
      <!-- Header -->
      <div class="notif-header">
        <div v-show="!showArchives">
          <Icon
            name="delete"
            class="close-icon"
            @click="close"
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

      <!-- Tabs -->
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

      <!-- Archive -->
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
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
