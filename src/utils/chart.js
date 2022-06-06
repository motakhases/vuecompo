
/**
 * Chartjs plugun to show border around the chart
 */
export const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart, _, options) {
    const {
      ctx, chartArea: {
        left, top, right, width, height,
      },
    } = chart;
    ctx.save();

    ctx.fillStyle = options.borderColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;

    ctx.strokeRect(right, top, width - 1, height);

    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  },
};

/**
 * To resolve tooltip title data
 */
export const title = (tooltipItems) => tooltipItems[0].label;
