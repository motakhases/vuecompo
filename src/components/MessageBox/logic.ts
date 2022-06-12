import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';
import Link from '@/components/Link/index.vue';
import Modal from '@/components/Modal/index.vue';
import Icon from '@/components/Icon/index.vue';
import Avatar from '@/components/Avatar/index.vue';
import { ITicketRepliedUser } from '@/types';
import * as marked from 'marked';

@Component({
  components: {
    Link, Modal, Icon, Avatar,
  },
})
export default class MessageBox extends Vue {
  @Prop({ type: String }) readonly id!: string

  // eslint-disable-next-line camelcase
  @Prop({ type: String }) readonly created_at!: string

  @Prop({ type: String }) readonly content!: string

  // eslint-disable-next-line camelcase
  @Prop({ type: String }) readonly feedback_type!: string

  @Prop({ type: String }) readonly attachment?: string

  @Prop({ type: Object }) readonly user?: ITicketRepliedUser

  @Prop({ type: String }) readonly myId!: string

  replyFeedbackModal = false

  replyFeedbackItems = [
    {
      type: 'INSUFFICIENT',
      content: this.$i18n.t('ticket.replyReportContents.INSUFFICIENT'),
    },
    {
      type: 'IRRELEVANT',
      content: this.$i18n.t('ticket.replyReportContents.IRRELEVANT'),
    },
    {
      type: 'DISRESPECTFUL',
      content: this.$i18n.t('ticket.replyReportContents.DISRESPECTFUL'),
    },
  ]

  get markDownToHtml() {
    return marked.parse(this.content);
  }

  @Emit()
  replyFeedback(feedbackType: string) {
    this.replyFeedbackModal = false;
    return {feedbackType, id:this.id}
  }
}
