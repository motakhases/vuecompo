import { Component, Prop, Vue } from 'vue-property-decorator';
import Avatar from '@/components/Avatar/index.vue';

@Component({
  components: { Avatar },
})
export default class AvatarProgressBar extends Vue {
  @Prop({ type: String, default: 'beginner' }) readonly type!: string;

  @Prop({ type: String, required: true }) readonly percent!: string;

  @Prop({ type: String }) readonly img!: string;
}
