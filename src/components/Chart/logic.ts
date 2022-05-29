import { Component, Prop, Vue } from 'vue-property-decorator';
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
);

@Component({
  components: {
    LineChartGenerator,
  },
})
export default class Chart extends Vue {
  @Prop({ type: String, default: 'chart-line' }) readonly chartId!: string;

  @Prop({ type: Number }) width!: number;

  @Prop({ type: Number }) height!: number;

  options = {}

  chartData = {
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12] }],
  }
}
