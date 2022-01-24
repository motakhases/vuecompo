import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';

@Component
export default class DataSheetRow extends Vue {
  @Prop({ type: Object, required: true }) readonly cols!: DataSheetItemSpans

  get columns(): string {
    const { xs, md, lg } = this.cols;
    return `grid-cols-${xs} md:grid-cols-${md} lg:grid-cols-${lg}`;
  }
}
