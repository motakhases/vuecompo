import { Component, Prop, Vue } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: { Skeleton },
})
export default class QuickFilterButton extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: String, required: true }) readonly value!: string;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;
}
