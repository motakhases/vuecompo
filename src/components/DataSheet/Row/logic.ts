import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class DataSheetRow extends Vue {
  @Prop({ type: Number }) readonly cols!: number

  get columns(): string {
    return `grid-cols-${this.cols}`;
  }
}
