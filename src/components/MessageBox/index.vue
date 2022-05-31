<template>
  <div class="zpl-message-box">
    <div class="avatar">
      <img :src="user.avatar" width="40" height="40">
    </div>
    <div class="left-side">
      <div :class="['message-box', {'my-reply':user.id===myId, 'others-reply':user.id!==myId}]">
        <pre class="content" v-html="markDownToHtml">
        </pre>
        <div class="attachment-link" v-if="attachment">
          <Link :href="attachment" text="دانلود فایل پیوست" target="_blank"/>
        </div>
        <div class="detail">
          <span>{{user.name}}</span>
          <span class="detail-separator">•</span>
          <span>{{created_at | JdateHour | faNum}} </span>
        </div>
      </div>
      <div class="reply-feedback">
        <span>این پاسخ برای شما مفید بود؟</span>
        <Icon
          name="ThumbsUp"
          class="thumbs-icons"
        />
        <Icon
          name="ThumbsDown"
          class="thumbs-icons"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import logic from './logic';
import './style.scss';

export default Vue.extend({ mixins: [logic] });
</script>
