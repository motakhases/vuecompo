import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';
import { ITicketRepliedUser } from '@/types';
import Avatar from '@/components/Avatar/index.vue';
import Tooltip from '@/components/Tooltip/index.vue';

@Component({
  components: {
    Avatar, Tooltip,
  },
})
export default class Rating extends Vue {
  @Prop({ type: Array }) readonly users!: ITicketRepliedUser[] ;

  @Prop({ type: String }) readonly caption!: string ;

  @Prop({ type: Boolean, required: true }) readonly hasAvatar!: boolean ;

  @Prop({ type: Boolean, default: false }) readonly captionRight!: boolean ;

  existRates = ['1', '2', '3', '4', '5']

  @Emit()
  rating(rate: string) {
    return rate;
  }
}
