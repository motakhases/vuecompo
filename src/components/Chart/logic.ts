import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import options from './options';

Vue.use(VueApexCharts);

@Component({ components: { VueApexCharts } })
export default class Chart extends Vue {
  @Prop({ type: String, default: 'area' }) readonly type!: string;

  @Prop({ type: Array }) readonly series!: ApexAxisChartSeries;

  options = {
    ...options,
  }
}
