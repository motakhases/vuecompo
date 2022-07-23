import { Component, Vue, Prop } from 'vue-property-decorator';
import DataSheetRow from './Row/index.vue';
import DataSheetItem from './Item/index.vue';

@Component({ components: { DataSheetRow, DataSheetItem } })
export default class Logic extends Vue {
  @Prop({ type: Number, default: 1 }) readonly loadingNumber!: number;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: Boolean }) readonly row?: boolean;

  @Prop({ type: Boolean }) readonly leftAlign?: boolean;
}
