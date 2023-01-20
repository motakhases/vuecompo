import { Component, Prop, Vue } from 'vue-property-decorator';
import AvatarProgressBar from '@/components/AvatarProgressBar/index.vue';
import { UserLabelList, UserTaskItems } from '@/types';
import ZarinID from './ZarinID/index.vue';
import UserLevel from './UserLevel/index.vue';
import TasksStack from './TasksStack/index.vue';

@Component({
  components: {
    AvatarProgressBar,
    ZarinID,
    UserLevel,
    TasksStack,
  },
})
export default class UserProfileCard extends Vue {
  @Prop({ type: String, required: true }) readonly fullname!: string;

  @Prop({ type: String, required: true }) readonly avatarPercent!: string;

  @Prop({ type: String, required: true }) readonly zarinId!: string;

  @Prop({ type: String, required: true }) readonly levelText!: string;

  @Prop({ type: String, default: 'beginner' }) readonly level!: string;

  @Prop({ type: String }) readonly avatarImg?: string;

  @Prop({ type: Array }) readonly labelList?: UserLabelList[];

  @Prop({ type: Array }) readonly taskItems?: UserTaskItems[];
}
