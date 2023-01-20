import { Component, Prop, Vue } from 'vue-property-decorator';
import { StatsBlockItemSpans } from '@/types';

@Component
export default class StatsBlockRow extends Vue {
  @Prop({ type: Object }) readonly cols?: StatsBlockItemSpans;

  get columns(): string {
    let classes = '';
    if (this.cols) {
      const { xs, md, lg } = this.cols;
      classes = `grid-cols-${xs} md:grid-cols-${md} lg:grid-cols-${lg}`;
    }
    return classes;
  }
}
