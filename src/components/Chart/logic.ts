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

  chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart: any, args: any, options: any) {
      const {
        ctx, chartArea: {
          left, top, right, bottom, width, height,
        },
      } = chart;
      ctx.save();

      // ctx.fillStyle = options.borderColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;

      // ctx.strokeRect(right, top, width - 1, height);

      ctx.strokeRect(left - 5, top, width + 1, 0);
      ctx.restore();
    },
  };

  plugins = [this.chartAreaBorder]

  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
      x: {
        grid: {
          borderDash: [5, 10],
          color: '#DADBE1',
        },
        ticks: {
          font: {
            family: 'IRANYekanRdFaNum',
            size: 11,
            weight: '500',
          },
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      chartAreaBorder: {
        borderColor: '#DADBE1',
        borderWidth: 1,
        borderDash: [5, 10],
        borderDashOffset: 5,
      },
      legend: {
        labels: {
          usePointStyle: true,
          padding: 24,
          font: {
            family: 'IRANYekanRdFaNum',
            size: 11,
            weight: '500',
          },
        },
        position: 'bottom',
        align: 'start',
        rtl: true,
        boxWidth: 10,
      },
      title: {
        display: false,
      },
      tooltip: {
        rtl: true,
        usePointStyle: true,
        boxPadding: 4,
        backgroundColor: '#19191A',
        cornerRadius: 4,
        padding: 12,
        titleSpacing: 12,
        titleAlign: 'left',
        bodySpacing: 12,
        titleFont: {
          family: 'IRANYekanRdFaNum',
          size: 12,
          weight: '400',
        },
        bodyFont: {
          family: 'IRANYekanRdFaNum',
          size: 12,
        },
      },
    },
  }
}
