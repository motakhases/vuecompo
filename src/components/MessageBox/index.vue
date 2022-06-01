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
          <Link :href="attachment" :text="$t(`ticket.downloadAttachment`)" target="_blank"/>
        </div>
        <div class="detail">
          <span>{{user.name}}</span>
          <span class="detail-separator">•</span>
          <span>{{created_at | JdateHour | faNum}} </span>
        </div>
      </div>
      <div class="reply-feedback" v-if="user.id!==myId && user.id !== '11'">
        <div class="question" v-if="feedback_type === 'NONE'">
          <span>{{$t(`ticket.wasHelpful`)}}</span>
          <Icon
            name="ThumbsUp"
            class="thumbs-icons"
            @click.native="replyFeedback('HELPFUL')"
          />
          <Icon
            name="ThumbsDown"
            class="thumbs-icons"
            @click.native="replyFeedbackModal = true"
          />
          <Modal v-if="replyFeedbackModal" @close="replyFeedbackModal = false" width="400px" title="گزارش پاسخ">
            <div slot="body" class="reply-feedback-modal">
              <div v-for="(item, index) in replyFeedbackItems" :key="index" class="feedback-box" @click="replyFeedback('INSUFFICIENT')">
                <Icon
                  name="Warning"
                  class="warn-icon"
                />
                <div class="feedback-box-content">
                  <span>{{$t(`ticket.replyReportTypes.${item.type}`)}}</span>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div v-else>
          <span>{{$t(`ticket.replyReportTypes.${feedback_type}`)}}</span>
          <Icon
            :name="feedback_type==='HELPFUL'? 'ThumbsUp' : 'ThumbsDown'"
            :class="['thumbs-icons', feedback_type==='HELPFUL'? 'thumbs-up' : 'thumbs-down']"
            @click.native="replyFeedback('HELPFUL')"
          />
        </div>
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
