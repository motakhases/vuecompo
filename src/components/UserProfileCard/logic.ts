import Vue from 'vue';
import AvatarProgressBar from '@/components/AvatarProgressBar/index.vue';
import ZarinID from './ZarinID/index.vue';
import UserLevel from './UserLevel/index.vue';
import TasksStack from './TasksStack/index.vue';

export default Vue.extend({
  name: 'UserProfileCard',
  components: {
    AvatarProgressBar, ZarinID, UserLevel, TasksStack,
  },
  props: {
    avatarSize: {
      type: String,
      default: 'medium',
    },
    avatarType: {
      type: String,
      default: 'beginner',
    },
    avatarPercent: {
      type: Number,
      default: 50,
    },
    avatarImg: {
      type: String,
      default: '',
    },
    zarinId: {
      type: String,
      default: '',
    },
    zarinIdType: {
      type: String,
      default: 'blue',
    },
    fullname: {
      type: String,
      default: '',
    },
    labelList: {
      type: Array,
      default: () => [],
    },
    levelText: {
      type: String,
      default: '',
    },
    taskItems: {
      type: Array,
      default: () => [],
    },
  },
});
