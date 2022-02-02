import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';

@Component
export default class DataSheetItem extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Object }) readonly colSpan?: DataSheetItemSpans;

  get spans(): string {
    let classes = '';
    if (this.colSpan) {
      const { xs, md, lg } = this.colSpan;
      classes = `col-span-${xs} md:col-span-${md} lg:col-span-${lg}`;
    }
    return classes;
  }
}
