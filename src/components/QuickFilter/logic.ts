import { Component, Prop, Vue } from 'vue-property-decorator';
import { QuickFilterBtn } from '@/types';
import QuickFilterButton from './Button/index.vue';

@Component({
  components: { QuickFilterButton },
})

export default class QuickFilter extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  items!: QuickFilterBtn[];

  @Prop({ type: String, required: true, default: () => [] })
  queryKey!: string;

  changeFilter(item:QuickFilterBtn): void {
    this.$router.push({
      query: { [this.queryKey]: item.value },
    });
  }

  created(): void {
    if (!this.$route.query[this.queryKey]) {
      this.changeFilter(this.items[0]);
    }
  }
}
