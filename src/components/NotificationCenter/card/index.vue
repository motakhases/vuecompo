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
            {{ card.date | JdateName }}
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
import JdateName from '@/utils/filters/JdateName';

export default ({
  name: 'NotificationCard',
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    JdateName,
  },
});

</script>

