import { dayName, hour, month } from '@/utils/momentCustom';

function generateSeries(w: any, dataPointIndex: number) {
  return w.globals.series.map((i: any, index: number) => (
    i[dataPointIndex] ? `
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
    ` : null
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
      const date = w.config.categories[dataPointIndex];
      const { xType } = w.config;

      return `
        <div class="c-t">
          ${(xType === 'day')
    ? `<div>${hour(date)}</div>`
    : `<div>${hour(date)} - ${dayName(date)} - ${month(date)}</div>`
}
          <div class="series">
            ${generateSeries(w, dataPointIndex)}
          </div>
        </div>
      `;
    },
  },
};

