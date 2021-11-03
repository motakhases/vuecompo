<template>
  <div>
    <div
      v-for="(card,index) in $parent.cards"
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
          v-if="card.desc"
          class="desc"
        > {{ card.desc }} </span>
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

export default ({
  name: 'NotificationCard',
});

</script>

