<template>
  <div :class="['zpl-notification-modal']">
    <div
      :class="['zpl-notification-center', isShow ? 'show': 'hide' ]"
    >
      <div
        v-if="!showArchives"
        class="notif-box"
      >
        <!-- Header -->
        <div class="notif-header">
          <Button
            icon="delete"
            type="tertiary"
            size="medium"
            @click.native="toggle"
          />
          <Button
            icon="clockRefresh"
            type="tertiary"
            size="medium"
            @click.native="showArchives=true"
          />
        </div>

        <!-- Tabs -->
        <Tabs
          :fill-container="true"
        >
          <Tab
            :title="$t('common.notifications')"
          >
            <div v-if="todayCards(notifs).length">
              <span class="notif-period">
                {{ $t('dashboard.chart.today') }}
              </span>
              <card
                :cards="todayCards(notifs)"
              />
            </div>
            <div v-if="yesterdayCards(notifs).length">
              <span class="notif-period">
                {{ $t('dashboard.chart.yesterday') }}
              </span>
              <card
                :cards="yesterdayCards(notifs)"
              />
            </div>
            <div v-if="thisWeekCards(notifs).length">
              <span class="notif-period">
                {{ $t('dashboard.chart.current_week') }}
              </span>
              <card
                :cards="thisWeekCards(notifs)"
              />
            </div>
            <noNotif v-else />
          </Tab>
          <Tab
            :title="$t('common.zarinPalAnnouncement')"
          >
            <div v-if="todayCards(announcements).length">
              <span class="notif-period">
                {{ $t('dashboard.chart.today') }}
              </span>
              <card
                :cards="todayCards(announcements)"
              />
            </div>
            <div v-if="yesterdayCards(announcements).length">
              <span class="notif-period">
                 {{ $t('dashboard.chart.yesterday') }}
              </span>
              <card
                :cards="yesterdayCards(announcements)"
              />
            </div>
            <div v-if="thisWeekCards(announcements).length">
              <span class="notif-period">
                {{ $t('dashboard.chart.current_week') }}
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
      </div>

      <!-- Archive -->
      <div
        v-else
        class="archive-box"
      >
        <!-- Archive header-->
        <div class="archive-header">
          <Button
            icon="arrowRight"
            type="tertiary"
            size="medium"
            @click.native="showArchives=false"
          />
          <h3 class="archive-title">
            {{ $t('common.archive_announcement') }}
          </h3>
        </div>
        <!-- Archive body-->
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
    <div
      v-if="isShow"
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
