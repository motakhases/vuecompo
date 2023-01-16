import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Icon from '@/components/Icon/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';
import { SocialType } from '@/types';

@Component({
  components: {
    Icon,
    Skeleton,
  },
})
export default class Social extends Vue {
  @Prop({ type: String, required: true }) urlAdr?: string;

  @Prop({ type: String }) typeStyle?: string;

  @Prop({ type: String }) text?: string;

  @Prop({ type: Boolean, default: false }) loading?: boolean;

  @Prop({ type: String, default: 'circle' }) typeIcon?: SocialType;
}
