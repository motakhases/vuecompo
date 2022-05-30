import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Chart js dependencies
 * -----------------------------------------
 */
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement,
} from 'chart.js';

/**
 * Custom plugins
 * -----------------------------------------
 */
import LegendPlugin from './plugins/legend';

/**
 * Chartjs features registration
 * -----------------------------------------
 */
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

@Component({
  components: {
    LineChartGenerator,
  },
})
export default class Chart extends Vue {
  @Prop({ type: String, default: 'chart-line' }) readonly chartId!: string;

  @Prop({ type: Object }) readonly chartData!: any;

  @Prop({ type: Number }) width!: number;

  @Prop({ type: Number }) height!: number;

  plugins = [LegendPlugin]

  options = {
    responsive: true,
    plugins: {
      LegendPlugin: {
        // ID of the container to put the legend in
        containerID: 'legend-container',
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }
}
