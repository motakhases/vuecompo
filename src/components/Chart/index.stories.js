import Chart from "./index.vue";

export default {
  component: Chart,
  title: "Components/Chart",
};

const Template = (_, { argTypes }) => ({
  components: { Chart },
  props: Object.keys(argTypes),
  data() {
    return {
      data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
        datasets: [{ data: [40, 20, 12, 32, 14, 18, 22] }],
      }
    }
  },
  template: `
    <Chart :height="100" :chart-data="data" />
  `,
});

export const Default = Template.bind({});
