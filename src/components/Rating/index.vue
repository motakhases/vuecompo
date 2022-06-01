<template>
  <div
    :class="['zpl-rating']"
  >
  <p :class="['rating-cp',{'text-right': captionRight}]">{{caption}}</p>
  <div class="operators" v-if="hasAvatar">
    <div class="operator-avatar" v-for="(user, index) in users" :key="index">
      <Tooltip  space="smallSpace" :text="user.name" indicator position="topCenter">
        <Avatar :img="user.avatar" size="large" :hasBorder="true"/>
      </Tooltip>
    </div>
  </div>
  <div class="rating-boxes">
    <div
      class="rating-box"
      v-for="(rate, index) in existRates"
      :key="index"
      @click="rating(rate)"
    >
      {{rate | faNum}}
    </div>
  </div>
  <div class="rating-hint">
    <span>{{$t(`ticket.ticketFeedback.weak`)}}</span>
    <span>{{$t(`ticket.ticketFeedback.great`)}}</span>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
