import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import { dayName, hour, dayNumber } from '@/utils/momentCustom';
import options from './options';

Vue.use(VueApexCharts);

@Component({ components: { VueApexCharts } })
export default class Chart extends Vue {
  @Prop({ type: String, default: 'area' }) readonly type!: string;

  @Prop({ type: Array }) readonly series!: ApexAxisChartSeries;

  @Prop({ type: Array }) readonly colors!: ApexAxisChartSeries;

  @Prop({ type: Boolean }) readonly hideLegend!: boolean;

  @Prop({ type: String }) readonly height!: string;

  @Prop({ type: String }) readonly xType!: string;

  @Ref() readonly Chart!: any

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

  get resolveData() {
    /**
     * detect each index length
     * --------------------------------------
     */
    const lengths: number[] = [];
    if (this.series.length) {
      this.series.forEach((s) => {
        lengths.push(s.data.length);
      });
    }

    /**
     * find longer length index
     * --------------------------------------
     */
    const longestLength = lengths.indexOf(Math.max(...lengths));

    /**
     * Create categories based on
     * the longer array
     * --------------------------------------
     */
    const category: string[] = [];
    this.series[longestLength].data.forEach((x) => {
      category.push(x.x);
    });

    /**
     * Create new series without
     * categories
     * --------------------------------------
     */
    const series: any[] = [];
    this.series.forEach((s, index) => {
      series[index] = {
        name: s.name,
        data: [],
      };
      s.data.forEach((sData) => {
        series[index].data.push(sData.y);
      });
    });

    /**
     * Make all data lengths equal
     * --------------------------------------
     */
    series.forEach((s) => {
      const diffNum = lengths[longestLength] - s.data.length;

      if (s.data.length < lengths[longestLength]) {
        for (let i = diffNum; i > 0; i -= 1) {
          s.data.push(null);
        }
      }
    });

    console.log({
      lengths,
      longestLength,
      category,
      series,
    });

    return { category, series };
  }

  mounted() {
    this.Chart.updateOptions({
      xType: this.xType,
      colors: this.colors,
      xaxis: {
        categories: this.resolveData.category,
      },
    });
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
