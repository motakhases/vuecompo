import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';
import Label from '@/components/Label/index.vue';

interface ITableColumns {
  title: string;
  key: string
}

interface ITableRowData {
  title: string;
  type: string
}

interface ITableRow {
  type: string;
  data: string | number | ITableRowData[]
}

@Component({
  components: {
    Status,
    Label,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object }) readonly td!: ITableRow[]

  @Prop({ type: Array }) readonly columns!: ITableColumns[]

  get headerRight(): ITableRow {
    return Object.values(this.td)[0];
  }

  get headerLeft(): ITableRow[] {
    return Object.values(this.td).filter((obj: ITableRow) => obj.type === 'status' || obj.type === 'actions');
  }

  get rendredData(): ITableColumns[] {
    return this.columns.filter((obj: ITableColumns, index: number) => obj.key !== 'status' && obj.key !== 'actions' && index !== 0);
  }
}
