import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
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
    delete this.$route.query[this.queryKey];
    delete this.$route.query.page;
    this.$router.push({
      query: { [this.queryKey]: item.value, ...this.$route.query },
    });
  }

  created(): void {
    if (!this.$route.query[this.queryKey]) {
      this.changeFilter(this.items[0]);
    }
  }

  @Watch('$route.query')
  checkRouteChange(): void {
    console.log('hi');
    if (!this.$route.query[this.queryKey]) {
      this.changeFilter(this.items[0]);
    }
  }
}
