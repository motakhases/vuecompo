import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import { dayName, hour, dayNumber } from '@/utils/momentCustom';
import options from './options';

Vue.use(VueApexCharts);

@Component({ components: { VueApexCharts } })
export default class Chart extends Vue {
  @Prop({ type: String, default: 'area' }) readonly type!: string;

  @Prop({ type: Array }) readonly series!: ApexAxisChartSeries;

  @Prop({ type: Boolean }) readonly hideLegend!: boolean;

  @Prop({ type: String }) readonly height!: string;

  @Prop({ type: String }) readonly xType!: string;

  options = {
    ...options,
    xaxis: {
      crosshairs: { show: false },
      tooltip: { enabled: false },
      labels: {
        trim: false,
        rotate: 0,
        hideOverlappingLabels: false,
        formatter: (value: string) => this.xaxisFormatter(value),
      },
    },
  }

  xaxisFormatter(value: string) {
    let result = '';

    const day = this.xType === 'day';
    const week = this.xType === 'week';
    const month = this.xType === 'month';

    if (day) result = hour(value);
    if (week) result = dayName(value);
    if (month) result = dayNumber(value);

    return result;
  }
}
