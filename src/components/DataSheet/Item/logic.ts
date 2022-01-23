import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';

@Component({})
export default class DataSheetItem extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Object }) readonly colSpan!: DataSheetItemSpans;

  get spans(): string {
    const { xs, md, lg }: DataSheetItemSpans = this.colSpan;
    return `col-span-${xs} md:col-span-${md} lg:col-span-${lg}`;
  }
}
