import { Component, Prop, Vue } from 'vue-property-decorator';
import Skeleton from '@/components/Skeleton/index.vue';
import { StatsBlockItemSpans } from '@/types';

@Component({
  components: { Skeleton },
})
export default class StatsBlockItem extends Vue {
  @Prop({ type: String }) info?: string; // icon (component) e rahnama be hamrahe tooltip
  @Prop({ type: Boolean }) label?: boolean; // onvan balayi ??
  @Prop({ type: String }) title?: string; // onvan balayi ??
  @Prop({ type: String }) caption?: string; // matne payini ke kamel az samte next-panel miad
  @Prop({ type: Boolean }) action?: boolean; // infoe button
  @Prop({ type: String }) content?: string; // adade vasati

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Boolean }) readonly leftAlign?: boolean;

  @Prop({ type: Object }) readonly colSpan?: StatsBlockItemSpans;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  get spans(): string {
    let classes = '';
    if (this.colSpan) {
      const { xs, md, lg } = this.colSpan;
      classes = `col-span-${xs} md:col-span-${md} lg:col-span-${lg}`;
    }
    return classes;
  }
}
