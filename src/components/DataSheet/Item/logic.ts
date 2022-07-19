import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataSheetItemSpans } from '@/types';
import Loading from '../loading/index.vue';

@Component({
  components: { Loading },
})
export default class DataSheetItem extends Vue {
  @Prop({ type: String }) readonly title?: string;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Boolean }) readonly leftAlign?: boolean;

  @Prop({ type: Object }) readonly colSpan?: DataSheetItemSpans;

  @Prop({ type: Boolean }) readonly loading?: boolean;

  get spans(): string {
    let classes = '';
    if (this.colSpan) {
      const { xs, md, lg } = this.colSpan;
      classes = `col-span-${xs} md:col-span-${md} lg:col-span-${lg}`;
    }
    return classes;
  }
}
