import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Status extends Vue {
  @Prop({ type: String }) readonly id?: string;

  @Prop({ type: String }) readonly level!: string;

  get levelText() {
    let text = '';

    switch (this.level) {
    case 'BASIC':
      text = 'تایید اولیه';
      break;
    case 'GOLD':
      text = 'طلایی';
      break;
    case 'NEW':
      text = 'عضو جدید';
      break;
    case 'SILVER':
      text = 'نقره‌ای';
      break;

    default:
      break;
    }

    return text;
  }
}
