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
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }]
    }
  },
  template: `
    <Chart :series="series" />
  `,
});

export const Default = Template.bind({});
