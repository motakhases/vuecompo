/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component, Prop, Watch, Emit, Vue,
} from 'vue-property-decorator';

// Sub components
import Status from '@/components/Status/index.vue';
import CheckBox from '@/components/CheckBox/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Button from '@/components/Button/index.vue';
import Th from './_th/index.vue';
import Td from './_td/index.vue';
import Card from './_card/index.vue';

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
    Dropdown,
  },
})
export default class Logic extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ type: Array, required: true }) data!: any[]

  @Prop({ type: Array, required: true }) readonly columns!: IColumn[]

  @Prop({ type: Boolean }) readonly selectable?: boolean

  @Prop({ type: Boolean }) readonly bordered?: boolean

  @Prop({ type: Array }) readonly actions?: []

  @Prop({ type: String }) readonly linkPrefix?: string

  @Prop({ type: String }) readonly dropdownWidth?: string

  isLoadCards = false

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

  findLinkId(td: any) {
    const tdAsArray = Object.values(td);
    const tdValuesAsArray = Object.values(tdAsArray);

    const hasId = (obj: any): obj is any => obj?.id !== undefined;
    const id = tdValuesAsArray.filter(hasId);

    return id.length ? id[0].id : null;
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
  }

  destroyed(): void {
    window.removeEventListener('resize', this.handleResponsiveComponents);
  }
}
