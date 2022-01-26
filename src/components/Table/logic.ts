/* eslint-disable no-param-reassign */
import {
  Component, Prop, Watch, Vue,
} from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';
import CheckBox from '@/components/CheckBox/index.vue';

interface IRowChecks {
  all: boolean;
  rows: string[] | number[];
}
@Component({
  components: {
    Status,
    CheckBox,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Array, required: true }) data!: any[]

  @Prop({ type: Array, required: true }) readonly columns!: any[]

  mounted(): void {
    this.data.forEach((tr) => this.$set(tr, 'selected', false));
  }

  selectedRows = ''

  get allSelected(): boolean {
    return this.data.every((itm) => itm.selected);
  }

  set allSelected(val: boolean) {
    this.selectAll();
  }

  selectAll(): void {
    // eslint-disable-next-line no-return-assign
    this.data.forEach((itm) => itm.selected = !this.allSelected);
  }

  @Watch('data', { deep: true })
  onDataChange(): void {
    this.selectedRows = this.data
      .filter((itm) => itm.selected)
      .map((itm) => itm)
      .toString();
  }
}
