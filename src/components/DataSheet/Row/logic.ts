import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';

@Component
export default class DataSheetRow extends Vue {
  @Prop({ type: Object }) readonly cols?: DataSheetItemSpans;

  get columns(): string {
    let classes = '';
    if (this.cols) {
      const { xs, md, lg } = this.cols;
      classes = `grid-cols-${xs} md:grid-cols-${md} lg:grid-cols-${lg}`;
    }
    return classes;
  }
}
