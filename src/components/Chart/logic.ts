import { Component, Prop, Vue } from 'vue-property-decorator';
import { chartAreaBorder } from '@/utils/chart';

/**
 * Chart js dependencies
 * -----------------------------------------
 */
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, ChartDataset,
} from 'chart.js';
import options from './options';

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

  @Prop({ type: Object }) readonly chartData!: ChartDataset;

  plugins = [chartAreaBorder]

  options = options
}
