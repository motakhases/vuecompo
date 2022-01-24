import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';

@Component
export default class DataSheetItem extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Object, required: true }) readonly colSpan!: DataSheetItemSpans;

  get spans(): string {
    const { xs, md, lg } = this.colSpan;
    return `col-span-${xs} md:col-span-${md} lg:col-span-${lg}`;
  }
}
