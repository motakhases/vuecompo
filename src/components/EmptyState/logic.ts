import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';

@Component({
  components: { Button },
})
export default class EmptyState extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: String }) readonly caption!: string;

  @Prop({ type: Array, default: () => [] }) readonly buttons!: [];

  @Prop({ type: Boolean, default: false }) readonly inCard!: boolean;
}
