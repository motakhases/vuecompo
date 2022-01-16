import { Component, Prop, Vue } from 'vue-property-decorator';
import Label from '@/components/Label/index.vue';
import { UserLabelList } from '@/types';

@Component({
  components: { Label },
})
export default class UserLevel extends Vue {
  @Prop({ type: String }) readonly text?: string

  @Prop({ type: Array }) readonly list?: UserLabelList[]
}
