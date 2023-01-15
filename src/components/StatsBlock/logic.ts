import { Component, Prop, Vue } from 'vue-property-decorator';

import StatsBlockRow from './SBRow/index.vue';
import StatsBlockItem from './SBItem/index.vue';

@Component({
  components: {
    StatsBlockRow,
    StatsBlockItem,
  },
})
export default class StatsBlock extends Vue {
  @Prop({ type: Number, default: 1 }) readonly loadingNumber!: number;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Boolean }) readonly leftAlign?: boolean;

  @Prop({ type: String }) title?: string;

  @Prop({ type: String }) link?: string;

  @Prop({ type: Boolean }) body?: boolean;
}
