import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import { IDropdownOptions } from '@/types';

@Component({
  components: { Button },
})
export default class EmptyState extends Vue {
  @Prop({ type: String, required: false }) readonly title!: string;

  @Prop({ type: String, required: false }) readonly caption!: string;

  @Prop({ type: Boolean, required: false, default: false }) readonly inCard!: boolean;
}
