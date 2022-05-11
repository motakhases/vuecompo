/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component, Prop, Watch, Emit, Vue, Ref,
} from 'vue-property-decorator';

// Sub components
import Status from '@/components/Status/index.vue';
import CheckBox from '@/components/CheckBox/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Button from '@/components/Button/index.vue';
import EmptyState from '@/components/EmptyState/index.vue';
import Th from './_th/index.vue';
import Td from './_td/index.vue';
import Card from './_card/index.vue';
import LoadingTable from './_loading/table.vue';

// Components

// Interfaces
interface IColumn {
  title: string;
  key: string;
}

@Component({
  components: {
    Status,
    CheckBox,
    Th,
    Td,
    Card,
    Button,
    EmptyState,
    Dropdown,
    LoadingTable,
  },
})
export default class Logic extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ type: Array }) readonly actions?: []

  @Prop({ type: Array }) data?: any[] | null

  @Prop({ type: String }) readonly routeName?: string

  @Prop({ type: Boolean }) readonly loading?: boolean

  @Prop({ type: Boolean }) readonly hasCustom?: boolean

  @Prop({ type: Boolean }) readonly bordered?: boolean

  @Prop({ type: Boolean }) readonly selectable?: boolean

  @Prop({ type: String }) readonly dropdownWidth?: string

  @Prop({ type: Array, required: true }) readonly columns!: IColumn[]

  @Prop({ type: String, required: true }) readonly emptyField?: string

  @Ref('table') readonly tableRef!: HTMLElement

  isLoadCards = false

  isAllRowSelected = false

  selectedRowsIndex: number[] = []

  tableOverflow = false

  @Watch('isAllRowSelected')
  watchAllSelected(): void {
    this.selectedRowsIndex = [];

    if (this.data && this.isAllRowSelected) {
      for (let index = 0; index < this.data.length; index += 1) {
        this.selectedRowsIndex.push(index);
      }
    }
  }

  @Watch('selectedRowsIndex')
  watchSelectedRowsIndex(value: number[]): void {
    this.emitSelectedRows(value);
  }

  @Emit('input')
  emitSelectedRows(payload: number[]): number[] {
    return payload;
  }

  isRowSelected(index: number): string | null {
    const isSelected = this.selectedRowsIndex.includes(index);
    return isSelected ? 'selected' : null;
  }

  selectRow(): void {
    this.isAllRowSelected = false;
  }

  findLinkId(td: any) {
    const tdAsArray = Object.values(td);
    const tdValuesAsArray = Object.values(tdAsArray);

    const hasId = (obj: any): obj is any => obj?.id !== undefined;
    const id = tdValuesAsArray.filter(hasId);

    return id.length ? id[0].id : null;
  }

  isOverflowing():void {
    if (this.tableRef) {
      if (this.tableRef.scrollWidth !== this.tableRef.clientWidth) {
        this.tableOverflow = true;
      } else {
        this.tableOverflow = false;
      }
    }
  }

  /**
   * It toggles rendered components
   * from virtual DOM at 768px
   */
  handleResponsiveComponents(): void {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth >= 768) {
      this.isLoadCards = false;
    } else {
      this.isLoadCards = true;
    }
  }

  created(): void {
    this.handleResponsiveComponents();
    window.addEventListener('resize', this.handleResponsiveComponents);
    window.addEventListener('resize', this.isOverflowing);
  }

  destroyed(): void {
    window.removeEventListener('resize', this.handleResponsiveComponents);
    window.removeEventListener('resize', this.isOverflowing);
  }

  mounted(): void {
    this.isOverflowing();
  }
}
