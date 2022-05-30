import { Component, Prop, Vue } from 'vue-property-decorator';
import Link from '@/components/Link/index.vue';
import { ITicketRepliedUser } from '@/types';

@Component({
  components: { Link },
})
export default class MessageBox extends Vue {
  @Prop({ type: String }) readonly id!: string

  // eslint-disable-next-line camelcase
  @Prop({ type: String }) readonly created_at!: string

  @Prop({ type: String }) readonly content!: string

  @Prop({ type: String }) readonly attachment?: string

  @Prop({ type: Object }) readonly user?: ITicketRepliedUser

  @Prop({ type: String }) readonly myId!: string
}
