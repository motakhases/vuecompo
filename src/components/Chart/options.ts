import { title } from '@/utils/chart';

export default {
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
      tension: 0,
    },
    point: {
      pointRadius: 0,
      hoverRadius: 0,
    },
  },
  plugins: {
    chartAreaBorder: {
      borderColor: '#DADBE1',
      borderWidth: 1,
      borderDash: [5, 10],
      borderDashOffset: 1,
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
      callbacks: {
        title,
      },
    },
  },
};
