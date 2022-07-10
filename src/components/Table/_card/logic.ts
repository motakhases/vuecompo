import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';
import Label from '@/components/Label/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Button from '@/components/Button/index.vue';
import TypeRenderer from '../_typeRenderer/index.vue';

// Interfaces
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
    TypeRenderer,
    Dropdown,
    Button,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object }) readonly td!: ITableRow[]

  @Prop({ type: Array }) readonly columns!: ITableColumns[]

  @Prop({ type: Boolean }) readonly bordered?: boolean

  @Prop({ type: Array }) readonly actions?: []

  @Prop({ type: String }) readonly routeName?: string

  @Prop({ type: [String, Number] }) readonly linkId!: string | number

  @Prop({ type: Object }) readonly params?: any

  @Prop({ type: Function }) readonly handleClickFromOutside?: () => void

  get headerRight(): ITableRow {
    return Object.values(this.td)[0];
  }

  get headerLeft(): ITableRow[] {
    return Object.values(this.td).filter(
      (obj: ITableRow) => obj.type === 'status' || obj.type === 'actions',
    );
  }

  get rendredData(): ITableColumns[] {
    return this.columns.filter(
      (obj: ITableColumns, index: number) => obj.key !== 'status' && obj.key !== 'actions' && index !== 0,
    );
  }

  linkHandler(): void {
    this.$router.push({ name: this.routeName, params: { id: this.linkId.toString(), ...this.params } });
  }
}
