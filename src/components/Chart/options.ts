import { dayName, hour, month } from '@/utils/momentCustom';

function generateSeries(w: any, dataPointIndex: number) {
  return w.globals.series.map((i: any, index: number) => (
    `
    <div class="serie">
      <span class="title">
        <span style="background-color: ${w.globals.fill.colors[index]}"></span>
        ${w.globals.seriesNames[index]}
      </span>
      <span>
        ${i[dataPointIndex].toLocaleString()}
        تومان
      </span>
    </div>
    `
  )).join(' ');
}

export default {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    fontFamily: 'IRANYekanRdFaNum',
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  fill: {
    gradient: {
      type: 'vertical',
      opacityFrom: 0.25,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  grid: {
    strokeDashArray: 4,
    position: 'back',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#0A33FF', '#DADBE1', '#FF4059', '#FF865A', '#FFAB34', '#3BAC63', '#02BFE4', '#824EC0', '#624ED6'],
  yaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    offsetY: 24,
  },
  tooltip: {
    custom({
      series, seriesIndex, dataPointIndex, w,
    }: any) {
      const date = w.config.series[0].data[dataPointIndex].x;

      return `
        <div class="c-t">
          <div>
            ${hour(date)} - ${dayName(date)} - ${month(date)}
          </div>
          <div class="series">
            ${generateSeries(w, dataPointIndex)}
          </div>
        </div>
      `;
    },
  },
};

