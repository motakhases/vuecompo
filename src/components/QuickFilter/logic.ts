import { Component, Prop, Vue } from 'vue-property-decorator';
import QuickFilterButton from './Button/index.vue';
import { QuickFilterBtn } from '@/types';

@Component({
  components: { QuickFilterButton },
})

export default class QuickFilter extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  items!: QuickFilterBtn[];

  @Prop({ type: String, required: true, default: () => [] })
  queryKey!: string;

  @Prop({ type: Boolean, default: false })
  hasPaginate!: boolean

  changeFilter(item:QuickFilterBtn):void {
    const paginate = this.hasPaginate ? { page: '1' } : {};
    this.$router.push({
      query: { [this.queryKey]: item.value, ...paginate },
    }).catch(() => 0);
  }

  created() : void {
    if (!this.$route.query[this.queryKey]) {
      this.changeFilter(this.items[0]);
    }
  }
}
