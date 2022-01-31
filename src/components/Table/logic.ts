import {
  Component, Prop, Watch, Emit, Vue,
} from 'vue-property-decorator';

// Sub components
import Th from './_th/index.vue';
import Td from './_td/index.vue';
import Card from './_card/index.vue';

// Components
import Status from '@/components/Status/index.vue';
import CheckBox from '@/components/CheckBox/index.vue';

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
  },
})
export default class Logic extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ type: Array, required: true }) data!: any[]

  @Prop({ type: Array, required: true }) readonly columns!: IColumn[]

  @Prop({ type: Boolean }) readonly selectable?: boolean

  isAllRowSelected = false

  selectedRowsIndex: number[] = []

  @Watch('isAllRowSelected')
  watchAllSelected(): void {
    this.selectedRowsIndex = [];

    if (this.isAllRowSelected) {
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
}
