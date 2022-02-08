import { Component, Prop, Vue } from 'vue-property-decorator';
import QuickFilterButton from './Button/index.vue';
import { QuickFilterBtn } from '@/types';

@Component({
  components: { QuickFilterButton },
})

export default class QuickFilter extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  readonly items!: QuickFilterBtn[];

  @Prop({ type: Boolean, default: false }) readonly fill!: boolean;
}
