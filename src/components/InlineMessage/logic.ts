import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class InlineMessage extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;

  @Prop({ type: String, default: 'neutral' }) readonly type!: string;

  @Prop({ type: String }) readonly description!: string;

  @Prop({ type: Boolean, default: false }) readonly toggle!: boolean;

  show = true;

  showAlertHandler(): void {
    this.show = false;
  }
}
