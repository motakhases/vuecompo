<template>
  <div>
    <div v-for="(card, index) in cards" :key="index" class="notif-card">
      <div v-if="card.image" class="notif-img">
        <img :src="card.image" alt="test" />
      </div>
      <div class="card-data">
        <Icon v-if="card.icon" class="card-icon" :name="card.icon" />
        <div class="content">
          <span class="title"> {{ card.title }} </span>
          <span v-if="card.message" class="desc"> {{ card.message }} </span>
          <div class="extra-data">
            <span class="date">
              {{ card.date | JdateName }}
            </span>
            <Link v-if="card.link" class="link" :href="card.link" :text="$t('common.link')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import logic from './logic';

export default Vue.extend({ mixins: [logic] });
</script>
