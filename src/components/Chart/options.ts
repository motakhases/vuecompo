import { day, hour, month } from '@/utils/momentCustom';

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
    width: 3,
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
  colors: ['#FF4059', '#FF865A', '#FFAB34', '#3BAC63', '#02BFE4', '#824EC0', '#624ED6'],
  fill: {
    gradient: {
      type: 'vertical',
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      trim: true,
      style: {
        fontSize: 11,
      },
      formatter(value: any) {
        return day(value);
      },
    },
    crosshairs: { show: false },
    tooltip: { enabled: false },
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
            ${hour(date)} - ${day(date)} - ${month(date)}
          </div>
          <div class="series">
            ${generateSeries(w, dataPointIndex)}
          </div>
        </div>
      `;
    },
  },
};

