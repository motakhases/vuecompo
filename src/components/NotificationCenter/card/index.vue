<template>
  <div>
    <div
      v-for="(card,index) in cards"
      :key="index"
      class="notif-card"
    >
      <div class="content">
        <div
          v-if="card.image"
          class="notif-img"
        >
          <img
            :src="card.image"
            alt="test"
          >
        </div>
        <span class="title"> {{ card.title }} </span>
        <span
          v-if="card.message"
          class="desc"
        > {{ card.message }} </span>
        <div class="extra-data">
          <span class="date">
            {{ card.date }}
          </span>
          <a
            v-if="card.link"
            class="link"
            :href="card.link"
          >
            لینک
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-jalali';

export default ({
  name: 'NotificationCard',
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    todayCards() {
      return this.cards.filter((card) => card.date === moment().format('YYYY-M-D'));
    },
    yesterdayCards() {
      return this.cards.filter((card) => card.date === moment().subtract(1, 'days').format('YYYY-M-D'));
    },
    thisWeekCards() {
      const thisWeekNotifs = this.cards.filter((card) => card.date >= moment().subtract(6, 'days').format('YYYY-M-D'));
      return thisWeekNotifs.filter((card) => card.date <= moment().subtract(2, 'days').format('YYYY-M-D'));
    },
  },
});

</script>

